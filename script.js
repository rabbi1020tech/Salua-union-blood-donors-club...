// রক্তদাতা খুঁজুন ফর্ম
document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const bloodType = document.getElementById('bloodType').value;
    const location = document.getElementById('location').value;

    // এখানে সার্চ রেজাল্ট দেখানোর লজিক যোগ করুন
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `<p>রক্তের গ্রুপ: ${bloodType}, লোকেশন: ${location} এর জন্য রক্তদাতা খুঁজছি...</p>`;
});

// রক্তের আবেদন ফর্ম
document.getElementById('requestForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const patientName = document.getElementById('patientName').value;
    const bloodType = document.getElementById('bloodType').value;
    const location = document.getElementById('location').value;
    const urgency = document.getElementById('urgency').value;

    alert(`আবেদন জমা হয়েছে!\nরোগীর নাম: ${patientName}\nরক্তের গ্রুপ: ${bloodType}\nলোকেশন: ${location}\nজরুরিতা: ${urgency}`);
});