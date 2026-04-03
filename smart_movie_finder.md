

---

**Project structure:**

```
SmartMovieFinder/
│
├─ app.py
├─ requirements.txt
└─ README.md
```

**app.py** 

```python
import streamlit as st
import pandas as pd

# Page setup
st.set_page_config(page_title="Smart Movie Finder", page_icon="🎬", layout="wide")

# Custom styling (modern + minimal)
st.markdown("""
    <style>
    body {
        background-color: #0f172a;
    }
    .title {
        text-align: center;
        font-size: 40px;
        font-weight: bold;
        color: #f43f5e;
    }
    .subtitle {
        text-align: center;
        color: #94a3b8;
        margin-bottom: 30px;
    }
    .card {
        background-color: #1e293b;
        padding: 15px;
        border-radius: 15px;
        text-align: center;
        transition: 0.3s;
    }
    .card:hover {
        transform: scale(1.05);
    }
    </style>
""", unsafe_allow_html=True)

# Title section
st.markdown('<div class="title">🎬 Smart Movie Finder</div>', unsafe_allow_html=True)
st.markdown('<div class="subtitle">Find movies based on your mood, not just genre</div>', unsafe_allow_html=True)

# Dataset
data = {
    "title": [
        "Interstellar", "The Notebook", "John Wick",
        "Jumanji", "The Conjuring", "Frozen",
        "3 Idiots", "Avengers Endgame"
    ],
    "genre": [
        "Sci-Fi", "Romance", "Action",
        "Adventure", "Horror", "Animation",
        "Comedy", "Superhero"
    ],
    "mood": [
        "Thoughtful", "Emotional", "Intense",
        "Fun", "Scary", "Happy",
        "Feel-good", "Epic"
    ],
    "poster": [
        "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
        "https://image.tmdb.org/t/p/w500/qom1SZSENdmHFNZBXbtJAU0WTlC.jpg",
        "https://image.tmdb.org/t/p/w500/fZPSd91yGE9fCcCe6OoQr6E3Bev.jpg",
        "https://image.tmdb.org/t/p/w500/iYv9nX1o6J3rA7Qe9gY8Cw6F6zE.jpg",
        "https://image.tmdb.org/t/p/w500/wVYREutTvI2tmxr6ujrHT704wGF.jpg",
        "https://image.tmdb.org/t/p/w500/kgwjIb2JDHRhNk13lmSxiClFjVk.jpg",
        "https://image.tmdb.org/t/p/w500/66A9MqXOyVFCssoloscw79z8Tew.jpg",
        "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg"
    ]
}

df = pd.DataFrame(data)

# User section
st.markdown("### 🎯 What are you in the mood for?")

col1, col2 = st.columns(2)
with col1:
    selected_genre = st.selectbox("🎬 Choose Genre", df["genre"].unique())
with col2:
    selected_mood = st.selectbox("😊 Choose Mood", df["mood"].unique())

# Filter function
def get_movies(genre, mood):
    return df[(df["genre"] == genre) & (df["mood"] == mood)]

# Button
if st.button("✨ Show Recommendations"):
    results = get_movies(selected_genre, selected_mood)
    st.markdown("## 🍿 Recommended for You")
    if not results.empty:
        cols = st.columns(4)
        for i, row in results.iterrows():
            with cols[i % 4]:
                st.markdown(f"""
                    <div class="card">
                        <img src="{row['poster']}" width="140"><br><br>
                        <b>{row['title']}</b><br>
                        🎭 {row['genre']}<br>
                        😊 {row['mood']}
                    </div>
                """, unsafe_allow_html=True)
    else:
        st.warning("😅 No exact match found. Try a different mood!")

# Footer
st.markdown("---")
st.markdown("<center>✨ Designed for a better movie experience</center>", unsafe_allow_html=True)
```

**requirements.txt**

```
pandas
streamlit
```

**README.md**

```markdown
# Smart Movie Finder

A Streamlit app to find movies based on your mood.

## How to Run

1. Install dependencies: `pip install -r requirements.txt`
2. Run the app: `streamlit run app.py`
```

---



