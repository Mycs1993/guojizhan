import re
import os

file_path = r'c:\Users\JaceCheng\Desktop\国际站\src\data\products.ts'

if not os.path.exists(file_path):
    print(f"File not found: {file_path}")
    exit(1)

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Split by 'id: "' which is the standard format in the file
chunks = content.split('id: "')

print(f"Found {len(chunks)-1} potential products.")

# Skip the first chunk (preamble)
for i, chunk in enumerate(chunks[1:], 1):
    # Extract ID (up to the next quote)
    product_id = chunk.split('"')[0]
    
    # Check for 'faq:' key. 
    # We look for "faq:" or "faq?:" specifically to avoid text matches.
    # The file uses "faq?:" in interface but "faq:" in data.
    # We can just look for "faq:"
    
    # To be safer, we limit the search to the current object scope, 
    # but since we split by `id: "`, the chunk covers from this ID until the next ID 
    # (or end of file). This is a good approximation.
    
    has_faq = "faq:" in chunk
    
    if not has_faq:
        print(f"MISSING FAQ: {product_id}")
