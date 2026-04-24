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

const hat = '🎓';
const hole = '🌑';
const fieldCharacter = '⬜';
const pathCharacter = '👨';

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
                               console.log('คุณเลือก: ' + typegame + ' คุณได้เลือกตัวเลือกที่ไม่ถูกต้อง กรุณาเลือกรายการที่ถูกต้องค่ะ (โปรแกรมจะกลับไปยังเมนูเลือกรูปแบบเกมใน 3 วินาที)');
                                await delay(3000);
                                return await fnTypeGame();
                            }
                        }

async function fnCheckMode(typegame) {
                           
                            if (typegame === '1') {
                                await fnTrialGame();
                            } else if (typegame === '2') {
                            console.clear();
                            console.log('ขออภัยค่ะ โหมด Custom ยังไม่เปิดใช้งานในขณะนี้...รอ 2 วินาทีเพื่อกลับไปยังเมนูเลือกรูปแบบเกมค่ะ');
                            await delay(2000);
                            return fnTypeGame();
                            }
                        }
                        async function fnTrialGame() {
                             console.clear();
                             console.log('--- ยินดีต้อนรับสู่โหมดฝึกเล่นเกม (Training Game) ---');
                             console.log('กรุณาเลือกขนาดกระดาน:');
                             console.log('1. ขนาด 3x3 (ง่าย)');
                             console.log('2. ขนาด 4x4 (ปานกลาง)');
                             console.log('q. ย้อนกลับไปหน้าเมนูหลัก');

                             const sizeChoice = prompt('เลือกขนาด (1, 2 หรือ q) >> ');
                            
                             if (sizeChoice.toLowerCase() === 'q') return;
                             let rows = sizeChoice === '1' ? 3 : 4;
                             let cols = sizeChoice === '1' ? 3 : 4;

                             let field = Array.from({ length: rows }, () => Array(cols).fill(fieldCharacter));
                           
                             let currRow = 0;
                             let currCol = 0;
                             field[currRow][currCol] = pathCharacter;

                            if (rows === 3) {
                                field[1][1] = hole;
                                field[2][2] = hat;
                            } else {
                                field[1][1] = hole;
                                field[2][2] = hole;
                                field[3][3] = hat;
                            }

                         let playing = true;
                         while (playing) {
        console.clear();
        console.log('กด W:ขึ้น, S:ลง, A:ซ้าย, D:ขวา | หรือ Q:เพื่อออก');
        
        field.forEach(row => {
    console.log(row.map(char => char + ' ').join(''));
});

        const move = prompt('เดินไปที่ไหนดี? >> ').toLowerCase();

        if (move === 'q') {
            playing = false;
            break;
        }

        if (move === 'w') currRow--;
        else if (move === 's') currRow++;
        else if (move === 'a') currCol--;
        else if (move === 'd') currCol++;
        else {
            console.log('กรุณากดปุ่มทิศทางที่ถูกต้อง (W/A/S/D)');
            await delay(1000);
            continue;
        }

        // 1. ตรวจสอบว่าออกนอกขอบกระดานหรือไม่
        if (currRow < 0 || currRow >= rows || currCol < 0 || currCol >= cols) {
            console.log('โอ๊ะ! คุณเดินตกขอบกระดาน Game Over!');
            playing = false;
        } 
        // 2. ตรวจสอบว่าตกหลุมหรือไม่
        else if (field[currRow][currCol] === hole) {
            console.log('ว้าย! คุณตกลงไปในหลุม Game Over!');
            playing = false;
        } 
        // 3. ตรวจสอบว่าเจอหมวกหรือไม่
        else if (field[currRow][currCol] === hat) {
            console.log('ยินดีด้วย! คุณหาหมวกเจอแล้ว Win!');
            playing = false;
        } 
        // 4. เดินต่อไปได้
        else {
            field[currRow][currCol] = pathCharacter;
        }

        if (!playing) {
            console.log('กำลังกลับสู่หน้าเมนูหลักใน 3 วินาที...');
            await delay(3000);
        }
    }
}


                        

                        /*
                         async function fnCustomGame() {
                             console.clear();
                        }
                       */


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

await fnCheckMode(typegame);







/*----------------------- END : Main Program ---------------------------*/
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////