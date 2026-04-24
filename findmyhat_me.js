///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
/*----------- Start : Importing Modules And Using Prompt -----------*/
import promptSync from 'prompt-sync';


                    const prompt = promptSync();

/*----------- End : Importing Modules And Using Prompt -----------*/
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
/*------------------- Start : Creating Variables -------------------------*/
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

/*------------------- END : Creating Variables -------------------------*/
 //////////////////////////////////////////////////////////////////////////////     
 //////////////////////////////////////////////////////////////////////////////          
/*------------------- Start : Creating Functions -------------------------*/
async function fnActionChoice(choice) {
                            console.clear();

                                    if (choice==='1') {
                                        console.log('คุณเลือก: ' + choice + ' คุณได้เลือกเริ่มเล่นเกม');
                                        const name = prompt('กรุณากรอกชื่อตัวละครของคุณค่ะ >> '); 
                                        return name;
                                    }

                                    else if (choice === '2') {
                                     console.log('ขอบคุณที่แวะเข้ามาทักทายค่ะ! ลาก่อนนะค่ะ. . .');
                                     console.log('โปรแกรมจะปิดตัวลงใน 3 วินาที (หากไม่ปิดอัตโนมัติ กรุณากดปุ่ม Ctrl + C จำนวน 2 ครั้งเพื่อปิดโปรแกรม)');

                                     await delay(3000);
                                     process.exit();
                                    }
}

async function fnTypeGame() {
                            console.clear()
                            console.log('กรุณาเลือกรูปแบบเกมที่คุณต้องการเล่นค่ะ');
                            console.log('1. ฝึกเล่นเกม (Traning Game)');
                            console.log('2. เล่นเกม Find My Hat  (Custom Mode)');
                            const typegame = prompt('เลือกรายการ (1 หรือ 2) >> ');

                            if (typegame === '1') {
                                 console.log('คุณเลือก: ' + typegame + ' คุณได้เลือกฝึกเล่นเกม (Training Game)');
                                 return typegame;
                            } else if (typegame === '2') {
                                console.log('คุณเลือก: ' + typegame + ' คุณได้เลือกเล่นเกม Find My Hat (Custom Mode)');
                                return typegame;
                            } else if (typegame !== '1' && typegame !== '2') {
                                    console.log('คุณเลือก: ' + typegame + ' คุณได้เลือกตัวเลือกที่ไม่ถูกต้อง กรุณาเลือกรายการที่ถูกต้องค่ะ (โปรแกรมจะกลับไปยังเมนูเลือกรูปแบบเกมใน 3 วินาที)');
                                        await delay(3000);
                                     return await fnTypeGame();
                            } else {
                               return 'คุณเลือก: ' + typegame + ' คุณได้เลือกตัวเลือกที่ไม่ถูกต้อง กรุณาเลือกรายการที่ถูกต้องค่ะ (โปรแกรมจะกลับไปยังเมนูเลือกรูปแบบเกมใน 3 วินาที)';
                                
                            }
                        }

async function fnTrialGame(typegame) {
                            console.clear();
                            if (typegame === '1') {
                                console.log('คุณได้เข้าสู่โหมดฝึกเล่นเกม (Training Game) ขอให้สนุกกับการฝึกเล่นเกมนะค่ะ!');
                            } else if (typegame === '2') {
                                console.log('คุณได้เข้าสู่โหมดเล่นเกม Find My Hat (Custom Mode) ขอให้สนุกกับการเล่นเกมนะค่ะ!');
                            }
                        }


/*------------------- END : Creating Functions -------------------------*/
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
/*--------------------- Start : Main Program ----------------------------*/  
console.clear()

console.log('=== ยินดีตอนรับเข้าสู๋ Find Your Hat ===');
console.log('1. เริ่มเกม (Start Game)');
console.log('2. ออกจากเกม (Exit)');
const choice = prompt('เลือกรายการ (1 หรือ 2) >> ');
const name = await fnActionChoice(choice);
console.log('ยินดีต้อนรับเข้าสู่เกม Find Your Hat, ' + name + '!');

const typegame = await fnTypeGame();

const value = await fnTrialGame(typegame);







/*----------------------- END : Main Program ---------------------------*/
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////