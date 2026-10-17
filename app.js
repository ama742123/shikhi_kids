function showLesson(subject) {
  const lesson = document.getElementById("lesson");

  const lessons = {
    
bangla: {
  title: "📖 চলো বাংলা বর্ণমালা শিখি",
  content: `
    <h3>🌸 স্বরবর্ণ</h3>
    <p style="font-size:24px; line-height:2;">
      অ আ ই ঈ উ ঊ ঋ এ ঐ ও ঔ
    </p>

    <h3>🌼 ব্যঞ্জনবর্ণ</h3>
    <p style="font-size:24px; line-height:2;">
      ক খ গ ঘ ঙ চ ছ জ ঝ ঞ<br>
      ট ঠ ড ঢ ণ ত থ দ ধ ন<br>
      প ফ ব ভ ম য র ল শ ষ স হ<br>
      ড় ঢ় য় ৎ ং ঃ ঁ
    </p>

    <h3>🍎 বর্ণ দিয়ে শব্দ শিখি</h3>
    <p style="font-size:22px; line-height:2;">
      অ — অজগর 🐍<br>
      আ — আম 🥭<br>
      ই — ইঁদুর 🐭<br>
      উ — উট 🐪<br>
      ক — কলা 🍌<br>
      গ — গরু 🐄<br>
      ম — মাছ 🐟
    </p>

    <h3>✏️ অনুশীলন</h3>
    <p>নিজে নিজে বলো: অ — অজগর, আ — আম, ক — কলা।</p>
  `
},

    
english: {
  title: "🔤 Let's Learn English!",
  content: `
    <h3>🌈 Learn the Alphabet</h3>
    <p style="font-size:26px; line-height:2;">
      A B C D E F G<br>
      H I J K L M N<br>
      O P Q R S T U V W X Y Z
    </p>

    <h3>🍎 Learn Words</h3>
    <p style="font-size:22px; line-height:2;">
      A — Apple 🍎<br>
      B — Ball ⚽<br>
      C — Cat 🐱<br>
      D — Dog 🐶<br>
      E — Elephant 🐘<br>
      F — Fish 🐟<br>
      G — Grapes 🍇
    </p>

    <h3>🔢 Learn Numbers</h3>
    <p style="font-size:24px;">
      One — 1<br>
      Two — 2<br>
      Three — 3<br>
      Four — 4<br>
      Five — 5
    </p>

    <h3>✏️ Practice</h3>
    <p>Say aloud: A for Apple, B for Ball, C for Cat.</p>
  `
},

 
    math: {
      title: "🔢 চলো গণিত শিখি",
      content: "১ + ১ = ২<br><br>২ + ২ = ৪<br><br>৩ + ২ = ৫"
    },
    story: {
      title: "📚 ছোট্ট গল্প",
      content: "এক ছিল ছোট্ট খরগোশ। সে প্রতিদিন মন দিয়ে পড়াশোনা করত এবং সবার সঙ্গে ভালো ব্যবহার করত।"
    },
    writing: {
      title: "✍️ লেখা অনুশীলন",
      content: "আজ লেখো:<br><br>অ অ অ<br><br>A A A<br><br>১ ১ ১"
    },
    games: {
      title: "🎮 মজার প্রশ্ন",
      content: "প্রশ্ন: ইংরেজি বর্ণমালার প্রথম অক্ষর কোনটি?<br><br><button onclick=\"checkAnswer('A')\">A</button> <button onclick=\"checkAnswer('B')\">B</button><p id=\"answer\"></p>"
    }
  };

  const selected = lessons[subject];

  if (selected) {
    lesson.innerHTML =
      "<h2>" + selected.title + "</h2><p>" +
      selected.content + "</p>";
  }
}

function checkAnswer(answer) {
  const result = document.getElementById("answer");

  if (result) {
    result.textContent =
      answer === "A"
        ? "🎉 সাবাশ! সঠিক উত্তর!"
        : "😊 আবার চেষ্টা করো!";
  }
}
