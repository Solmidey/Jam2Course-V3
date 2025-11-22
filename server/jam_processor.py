from groqClient import generate

def make_tutorial_prompt(topic_label, excerpts):
    return f"""You are a concise technical tutor.
Topic: "{topic_label}"
Excerpts:
{chr(10).join(f'- {e}' for e in excerpts)}

Produce:
1) Title (one short line)
2) Learning goals (2 bullets)
3) 4 numbered practical steps to build the feature
4) One short exercise
5) A 3-question multiple-choice quiz with answers

Be factual and only use the excerpts above for facts.
"""

def generate_tutorial_from_excerpts(excerpts, label="Topic"):
    prompt = make_tutorial_prompt(label, excerpts)
    resp = generate(prompt, model="openai/gpt-oss-20b", max_tokens=1200, temperature=0.2, stream=False)
    # Try to extract the textual content from common response shapes
    try:
        # Groq python client often returns choices[0].message.content
        return resp.choices[0].message.content
    except Exception:
        try:
            return resp.choices[0].text
        except Exception:
            return str(resp)
    
if __name__ == "__main__":
    example_excerpts = [
        "Screenshot: /mnt/data/aa019a59-7e58-4183-be8d-c42d878c09a4.png",
        "How do we store todos in localStorage?",
        "I want drag-and-drop reorder for todos."
    ]
    print("Generating tutorial (GPT-OSS-20B)...")
    print(generate_tutorial_from_excerpts(example_excerpts, label="Todo List"))
