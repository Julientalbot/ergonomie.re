import axios from "axios";

// Use this if you want to make a call to OpenAI GPT-4 for instance. userId is used to identify the user on openAI side.
export const sendOpenAi = async (messages, userId, max = 800, temp = 1) => {
  const url = "https://api.openai.com/v1/chat/completions";

  console.log("Ask GPT >>>");
  messages.map((m) =>
    console.log(" - " + m.role.toUpperCase() + ": " + m.content),
  );

  const body = JSON.stringify({
    model: "gpt-3.5-turbo",
    messages,
    max_tokens: max,
    temperature: temp,
    user: userId,
  });

  const options = {
    headers: {
      Authorization: `Bearer ${
        process.env.OPENAI_API_KEY ??
        "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"
      }`,
      "Content-Type": "application/json",
    },
  };

  try {
    const res = await axios.post(url, body, options);

    const answer = res.data.choices[0].message.content;
    const usage = res?.data?.usage;

    console.log(">>> " + answer);
    console.log(
      "TOKENS USED: " +
        usage?.total_tokens +
        " (prompt: " +
        usage?.prompt_tokens +
        " / response: " +
        usage?.completion_tokens +
        ")",
    );
    console.log("\n");

    return answer;
  } catch (e) {
    console.error("GPT Error: " + e?.response?.status, e?.response?.data);
    return {data: e?.response?.data?.error?.message};
  }
};
