from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI(title="Reliable Aerial Services API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

class ContactForm(BaseModel):
    name: str
    email: str
    phone: str = ""
    service: str = ""
    message: str

@app.get("/api/")
async def root():
    return {"message": "Reliable Aerial Services API"}

@app.post("/api/contact")
async def contact(form: ContactForm):
    return {"status": "success", "message": "Message received"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
