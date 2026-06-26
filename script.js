const netflixFAQs = [
    {q: "netflix price plans enta entha cost amount monthly", a: "Netflix lo 4 plans unnai: Mobile ₹149, Basic ₹199, Standard ₹499, Premium ₹649 per month."},
    {q: "free trial unda free ga", a: "Ippudu Netflix free trial ivvatledu. Direct ga plan theeskovali."},
    {q: "password maradam ela reset change forgot", a: "Login page lo 'Forgot Password' kottandi. Mail ki reset link vastadi."},
    {q: "ekkuva devices lo chudaccha screens share", a: "Mobile-1, Basic-1, Standard-2, Premium-4 devices lo same time lo chudocchu."},
    {q: "netflix cancel ela cheyali subscription stop", a: "Account → Cancel Membership kottandi. Billing period varaku chudocchu."},
    {q: "download chesi offline chudaccha save", a: "Haa, app lo download option undi. Kaani anni movies download avvavu."},
    {q: "telugu movies series unaya language", a: "Chala unnai. Search lo 'Telugu' ani kottandi. RRR, Pushpa, Salaar anni unnai."},
    {q: "account share cheyoccha friends family", a: "Netflix rules prakaram household members matrame. Bayata vallatho share cheste extra charge padthadi."},
    {q: "payment methods emi support upi card", a: "Credit/Debit Cards, UPI, Net Banking, Gift Cards anni panichestai."},
    {q: "kids profile ela create cheyali children", a: "Manage Profiles → Add Profile → Kids option select cheyandi."},
    {q: "video quality bagoledu buffering slow", a: "Settings → Playback → Data Usage High pettandi. Internet speed kuda check cheyandi."},
    {q: "subscription auto renew avthunda automatic", a: "Haa, prati month mee card nunchi auto debit avthadi. Cancel cheste aagipothadi."}
];

function cleanText(text) {
    return text.toLowerCase().replace(/[^\w\s]/g, '').split(' ').filter(word => word.length > 1); // >1 chesa, >2 kaadu
}

function findBestAnswer(userQuestion) {
    const userWords = cleanText(userQuestion);
    console.log("User Words:", userWords); // Debug kosam
    
    let bestMatch = { score: 0, answer: "Sorry, aa question ki answer naa daggara ledu. Netflix help center chudandi: help.netflix.com" };
    
    for (let faq of netflixFAQs) {
        const faqWords = cleanText(faq.q);
        const score = userWords.filter(word => faqWords.includes(word)).length;
        console.log("FAQ:", faq.q, "Score:", score); // Debug kosam
        
        if (score > bestMatch.score) {
            bestMatch = { score: score, answer: faq.a };
        }
    }
    console.log("Best Match Score:", bestMatch.score); // Debug kosam
    return bestMatch.answer;
}

function sendMessage() {
    const input = document.getElementById('userInput');
    const chatBox = document.getElementById('chatBox');
    const userText = input.value.trim();
    
    if (userText === '') return;
    
    chatBox.innerHTML += `<div class="user-message">${userText}</div>`;
    const botResponse = findBestAnswer(userText);
    chatBox.innerHTML += `<div class="bot-message">${botResponse}</div>`;
    
    input.value = '';
    chatBox.scrollTop = chatBox.scrollHeight;
}

document.getElementById('userInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});