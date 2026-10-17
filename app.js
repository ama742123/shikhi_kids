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
  content: `
    <h3>🌟 সংখ্যা চেনো</h3>
    <p style="font-size:28px; line-height:2;">
      ১ ২ ৩ ৪ ৫<br>
      ৬ ৭ ৮ ৯ ১০
    </p>

    <h3>🍎 গুনে দেখো</h3>
    <p style="font-size:22px; line-height:2;">
      🍎 = ১টি আপেল<br>
      🍎 🍎 = ২টি আপেল<br>
      🍎 🍎 🍎 = ৩টি আপেল
    </p>

    <h3>➕ যোগ শিখি</h3>
    <p style="font-size:24px; line-height:2;">
      ১ + ১ = ২<br>
      ২ + ২ = ৪<br>
      ৩ + ২ = ৫<br>
      ৪ + ১ = ৫<br>
      ৫ + ২ = ৭
    </p>

    <h3>➖ বিয়োগ শিখি</h3>
    <p style="font-size:24px; line-height:2;">
      ৩ − ১ = ২<br>
      ৫ − ২ = ৩<br>
      ৪ − ১ = ৩
    </p>

    <h3>🔺 আকার চেনো</h3>
    <p style="font-size:24px; line-height:2;">
      ⚪ গোলাকার<br>
      🟥 বর্গাকার<br>
      🔺 ত্রিভুজ
    </p>

    <h3>✏️ অনুশীলন</h3>
    <p>নিজে উত্তর দাও: ২ + ৩ = কত?</p>
  `
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
  title: "🎮 চলো খেলতে খেলতে শিখি",
  content: `
    <h3>🌈 বাংলা কুইজ</h3>
    <p>১. আম শব্দের প্রথম অক্ষর কোনটি?</p>
    <button onclick="quizAnswer(this, 'wrong', 'bangla1')">ই</button>
    <button onclick="quizAnswer(this, 'correct', 'bangla1')">আ</button>
    <button onclick="quizAnswer(this, 'wrong', 'bangla1')">উ</button>
    <p id="bangla1"></p>

    <hr>

    <h3>🔤 English Quiz</h3>
    <p>2. Which letter comes first?</p>
    <button onclick="quizAnswer(this, 'correct', 'english1')">A</button>
    <button onclick="quizAnswer(this, 'wrong', 'english1')">B</button>
    <button onclick="quizAnswer(this, 'wrong', 'english1')">C</button>
    <p id="english1"></p>

    <hr>

    <h3>🔢 গণিত কুইজ</h3>
    <p>৩. ২ + ৩ = কত?</p>
    <button onclick="quizAnswer(this, 'wrong', 'math1')">৪</button>
    <button onclick="quizAnswer(this, 'correct', 'math1')">৫</button>
    <button onclick="quizAnswer(this, 'wrong', 'math1')">৬</button>
    <p id="math1"></p>
  `
},

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
