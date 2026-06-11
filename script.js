*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:Arial, sans-serif;
}

body{
    background:#f5f5f5;
    color:#333;
}

header{
    background:#00695c;
    color:white;
    padding:20px;
    text-align:center;
}

nav{
    margin-top:10px;
}

nav a{
    color:white;
    text-decoration:none;
    margin:0 15px;
    font-weight:bold;
}

nav a:hover{
    color:#ffd54f;
}

.hero{
    height:500px;
    background:linear-gradient(
        rgba(0,0,0,0.4),
        rgba(0,0,0,0.4)
    ),
    url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1600');
    background-size:cover;
    background-position:center;
    display:flex;
    justify-content:center;
    align-items:center;
    text-align:center;
    color:white;
}

.hero-content h2{
    font-size:3rem;
    margin-bottom:15px;
}

.hero-content p{
    font-size:1.2rem;
    margin-bottom:20px;
}

button{
    padding:12px 25px;
    border:none;
    border-radius:8px;
    background:#ffb300;
    color:white;
    font-size:1rem;
    cursor:pointer;
}

button:hover{
    background:#ff8f00;
}

.container{
    max-width:1200px;
    margin:auto;
    padding:60px 20px;
}

.container h2{
    text-align:center;
    margin-bottom:30px;
}

.cards{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(300px,1fr));
    gap:25px;
}

.card{
    background:white;
    border-radius:12px;
    overflow:hidden;
    box-shadow:0 4px 10px rgba(0,0,0,0.1);
    transition:0.3s;
}

.card:hover{
    transform:translateY(-8px);
}

.card img{
    width:100%;
    height:220px;
    object-fit:cover;
}

.card h3{
    padding:15px;
}

.card p{
    padding:0 15px 20px;
}

footer{
    background:#004d40;
    color:white;
    text-align:center;
    padding:25px;
}
