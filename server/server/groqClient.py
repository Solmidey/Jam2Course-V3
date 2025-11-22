from groq import Groq
import os

# create client using env var GROQ_API_KEY (must be set in server/.env or environment)
client = Groq(api_key=os.environ.get("GROQ_API_KEY"))

def generate(prompt, model="openai/gpt-oss-20b", max_tokens=800, temperature=0.2, stream=False):
    """
    Simple wrapper around Groq chat completions.
    Returns the raw response object from the Groq client.
    """
    resp = client.chat.completions.create(
        model=model,
        messages=[{"role":"user","content":prompt}],
        temperature=temperature,
        max_completion_tokens=max_tokens,
        stream=stream
    )
    return resp
