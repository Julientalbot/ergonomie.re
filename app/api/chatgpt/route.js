import { sendOpenAi } from "@/libs/gpt";
import axios from "axios";
import { NextResponse } from "next/server";

const OPENAI_API_KEY =
  "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik1UaEVOVUpHTkVNMVFURTRNMEZCTWpkQ05UZzVNRFUxUlRVd1FVSkRNRU13UmtGRVFrRXpSZyJ9.eyJzZXNzaW9uX2lkIjoiQVlIQW5Sb25yVXQzd0dfcVBqdGxYc0pBQzFSMTJlZXUiLCJodHRwczovL2FwaS5vcGVuYWkuY29tL3Byb2ZpbGUiOnsiZW1haWwiOiJwaXZldGVhdWl0QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlfSwiaHR0cHM6Ly9hcGkub3BlbmFpLmNvbS9hdXRoIjp7InBvaWQiOiJvcmctUVYwb21jQmJIeHFUUUczR2hoRDJBcTZPIiwidXNlcl9pZCI6InVzZXItQTlJS0VsWGNkYVlDcWRUbFloT0xNQ1BRIn0sImlzcyI6Imh0dHBzOi8vYXV0aDAub3BlbmFpLmNvbS8iLCJzdWIiOiJnb29nbGUtb2F1dGgyfDEwMjI0ODQ5MjMzNDcyMzI3NTMyNSIsImF1ZCI6WyJodHRwczovL2FwaS5vcGVuYWkuY29tL3YxIiwiaHR0cHM6Ly9vcGVuYWkub3BlbmFpLmF1dGgwYXBwLmNvbS91c2VyaW5mbyJdLCJpYXQiOjE3MjI3NjMxMjMsImV4cCI6MTcyMzYyNzEyMywic2NvcGUiOiJvcGVuaWQgZW1haWwgcHJvZmlsZSBtb2RlbC5yZWFkIG1vZGVsLnJlcXVlc3Qgb3JnYW5pemF0aW9uLnJlYWQgb3JnYW5pemF0aW9uLndyaXRlIG9mZmxpbmVfYWNjZXNzIiwiYXpwIjoiVGRKSWNiZTE2V29USHROOTVueXl3aDVFNHlPbzZJdEcifQ.E6Q-vu2TVhZn7ITm-g37a99Kogx9NWT88XpsNehXx5w-VyywRhsCvxEuwhfD4Q1MWGLmTCD1rwGkmmBmLHlzEmTkGtBm62kYGrf2r5E-PU1KuMXd5eyg18tqupNQxmfeFrRiAQonLMIrfVgbV_vVpIxcJQWk1ozxPa6MyGZmCFzx69D7TEk6gIoaLbMrYM8EiRxJaV0-Ej7HLmxcyRPjRrhybxgvtKwA-NyQqq1nr4SBZsDS86m39FjwhQSA5H-Y09Z_eV_5wPPFx8Bo43HdyisSk-u_pzJMttONMOS-7tNWdDUQQI7sv9v0Gu5Kk14T7cxrz6-cKYQxOWcKCrg3JQ";

export async function POST(req) {
  try {
    const {question} = await req.json();
    const prompt = `You are an expert in ergonomics. Answer the following question with detailed and practical advice:\n\n${question}`;
    const { data } = await sendOpenAi([{role: "user", content: prompt}], "ergonomics", 100, 0.5);

    const answer = data?.error?.message || data?.message|| data;

    return NextResponse.json({ answer });
  } catch (e) {
    console.error(e);
    console.log(e?.response, "---", e?.data)
    return NextResponse.json({error: true, answer: e.message});
  }
}
