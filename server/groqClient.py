import os
from groq import Groq

# Initialize client from env var GROQ_API_KEY
client = Groq(api_key=os.environ.get("GROQ_API_KEY"))

def generate(prompt, model="openai/gpt-oss-20b", max_tokens=800, temperature=0.2, stream=False):
    resp = client.chat.completions.create(
        model=model,
        messages=[{"role":"user","content":prompt}],
        temperature=temperature,
        max_completion_tokens=max_tokens,
        stream=stream
    )
    return resp
