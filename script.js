function goToPage(page) {
    window.location.href = page; // นำไปยังหน้าที่ระบุ
}

document.getElementById("nextButton").addEventListener("click", function() {
    window.location.href = "page2.html";
    
});
