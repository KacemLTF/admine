function showSubjects(level) {
    const subjectsDiv = document.getElementById("subjects");
    subjectsDiv.innerHTML = "";
    subjectsDiv.classList.remove("hidden");

    const subjects = ["رياضيات", "إعلامية"];

    subjects.forEach(sub => {
        let div = document.createElement("div");
        div.className = "card";
        div.innerText = sub;
        div.onclick = () => showContent(level, sub);
        subjectsDiv.appendChild(div);
    });
}

function showContent(level, subject) {
    const content = document.getElementById("content");
    content.classList.remove("hidden");

    content.innerHTML = `
        <h2>${subject} - ${level} ثانوي</h2>

        <h3>📄 تمرين</h3>
        <p>احسب: 5 + 3 = ؟</p>

        <h3>🧠 QCM</h3>
        <p>كم نتيجة 2 + 2 ؟</p>

        <button onclick="check(1)">3</button>
        <button onclick="check(2)">4</button>
        <button onclick="check(3)">5</button>

        <p id="result"></p>
    `;
}

function check(answer) {
    const result = document.getElementById("result");

    if (answer === 2) {
        result.innerHTML = "✅ إجابة صحيحة";
        result.style.color = "green";
    } else {
        result.innerHTML = "❌ إجابة خاطئة";
        result.style.color = "red";
    }
}