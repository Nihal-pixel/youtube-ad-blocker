let skipBtn = document.getElementsByClassName("ytp-ad-skip-button-slot");
if (skipBtn != undefined && skipBtn.length > 0) {
    console.log("Ad detected successfully!")
    skipBtn[0].click()
    console.log("Ad skipped successfully!")
}