การเขียนเกมแนว FindMyHat
            1. สร้างโปรเจคให้เรียนร้อย
                1.1 สร้างโฟลเดอร์โปรเจค และติดตั้งคำสั่งตามนี้ 
                        • npm init –y
                        • npm install prompt-sync  ตัดตั้งเครื่องมือ Prompt ให้กับโปรเจคของเรา
                1.2 สร้างไฟล์ .js ขึ้นมาเขียนแอพของเรา

            2. โครงสร้างการทำงานของเกมนี้ 
                
                [2.1 การ import เครื่องมือมาจัดเก็บใน ]
                [2.2...............................................................]
                [2.3 ...............................................................]]

            2. แนวทางของการเขียนเกม
                2.1 เขียนโค๊ด Import เครื่องมือ และจัดเก็บเครื่องมือฟังชั่นไว้ในตัวแปร Prompt ไว้ด้านบน ในส่วนของ Import และประกาศตัวแปรแล้วนำ Prompt นั้นไปใส่  จากนั้นใส่คอมเมนต์แบ่งสัดส่วนต่างๆ ให้ชัดเจน เพื่อใช้งาน หรือแก้ไขงานได้ง่าย

                        import promptSync from 'prompt-sync';
                        const prompt = promptSync();

                2.2 ทำหน้า Display ในหน้า Terminal เพื่อดูรูปแบบหน้าตาเกม และรับค่าเก็บไว้ในตัวแปล Choice โดยมีการสั่งให้การเช็คว่า ถ้ากด 1 และ 2 ให้ไปที่ไหน ในโค๊ดให้ไป Fn : actionChoice(choice) โดยส่งค่า choice ไปด้วย
                            
                            console.clear()
                            console.log('=== ยินดีตอนรับเข้าสู๋ Find Your Hat ===');
                            console.log('1. เริ่มเกม (Start Game)');
                            console.log('2. ออกจากเกม (Exit)');
                            const choice = promp('เลือกรายการ (1 หรือ 2) >> ');
                            actionChoice(choice);
                
                2.3 . Fn: actionChoice(choice) รับค่า แล้วเคลียหน้าจอ จากนั้นทำการตรวจสอบก่อนว่าคุณเลือกอะไร 

                            function actionChoice(choice) {
                            console.clear();

                                    if (choice==='1') {
                                        console.log('คุณเลือก: ' + choice + 'คุณได้เลือกเริ่มเล่นเกม');
                                        const name = prompt('กรุณากรอกชื่อตัวละครของคุณ >> '); 
                                    }

                                    else if (choice === '2') {
                                     console.log('ขอบคุณที่เล่นเกม! ลาก่อนครับ...');
                                    }
                            }

             ***!!! ส่วนที่ให้ AI ช่วยแนะนำ : ผมต้องการให้มันนับเวลาถอยหลัง 3วิ ก่อนจะใช้คำสั่ง process.exit();
                        
                        1. แก้ไขตัวเรียกฟังชั่น
                        
                        จาก actionChoice(choice); เป็น await actionChoice(choice);
                        
                        2. แก้โค๊ด if else ให้เป็นในรูปแบบ Synchronous
                        async function actionChoice(choice) {
                            console.clear();

                                    if (choice==='1') {
                                        console.log('คุณเลือก: ' + choice + ' คุณได้เลือกเริ่มเล่นเกม');
                                        const name = prompt('กรุณากรอกชื่อตัวละครของคุณค่ะ >> '); 
                                        console.log('ยินดีต้อนรับเข้าสู่เกม Find Your Hat, ' + name + '!');
                                    }

                                    else if (choice === '2') {
                                     console.log('ขอบคุณที่แวะเข้ามาทักทายค่ะ! ลาก่อนนะค่ะ. . .');
                                     console.log('โปรแกรมจะปิดตัวลงใน 3 วินาที (หากไม่ปิดอัตโนมัติ กรุณากดปุ่ม Ctrl + C จำนวน 2 ครั้งเพื่อปิดโปรแกรม)');

                                     awit deley(3000);
                                     process.exit();
                                    }
                            }

                            3. เพิ่มตัวแปล เวลา เพราะจะใช้ฟังชั่น Synchronous 
                        const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

                        !!! หลังจากทำเสร็จแล้ว ให้ลอง Run เพื่อตรวจสอบว่าโครงหน้าเกมของเราถูกต้องไหม!!!

                