from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Backend is running!"}

@app.get("/api/data")
def get_data():
    return {"data": ["Item 1", "Item 2", "Item 3"]}

# Run the server
# Use `uvicorn main:app --reload` to start the server