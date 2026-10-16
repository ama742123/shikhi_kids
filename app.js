function showLesson(subject) {
  const lesson = document.getElementById("lesson");

  const lessons = {
    bangla: {
      title: "📖 বাংলা বর্ণমালা",
      content: "অ আ ই ঈ উ ঊ ঋ এ ঐ ও ঔ<br><br>ক খ গ ঘ ঙ চ ছ জ ঝ ঞ"
    },
    english: {
      title: "🔤 English Alphabet",
      content: "A B C D E F G<br><br>H I J K L M N<br><br>O P Q R S T U V W X Y Z"
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
