export function RandomName() {
    const firstNames = [
        "สมชาย", "อภิชาติ", "ณัฐวุฒิ", "จิรภา", "กิตติ", "รัตนา",
        "ปรัชญา", "สุวรรณา", "มานิต", "พัชราภา"
    ];

    const lastNames = [
        "สวัสดิ์", "วัฒนกิจ", "ศรีสุข", "ธนบุญ", "โสภา", "ฤทธิ์",
        "อุดมชัย", "ชัยมงคล", "ทวีสุข", "จารุรัตน์"
    ];

    // สุ่มเลือกชื่อจากอาร์เรย์
    const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];

    // ส่งค่าชื่อเต็มกลับ
    return randomFirstName + " " + randomLastName;
}


export function RandomNumbers(quality) {
    if (quality < 1) quality = 1; // ป้องกันค่าไม่ถูกต้อง

    // คำนวณค่าต่ำสุดและค่าสูงสุด
    const min = 1;
    const max = Math.pow(10, quality) - 1;

    // สุ่มเลข
    const num = Math.floor(Math.random() * (max - min + 1)) + min;

    // แปลงเป็น string และเติม 0 ด้านหน้าให้ครบตาม quality
    return num.toString().padStart(quality, '0');
}

