(() => {
    class Memory {
        constructor(brand, capacity) {
            this.brand = brand;
            this.capacity = capacity;
            this.used = 0;
        }
        mount() {
            alert( 'Смонтирован диск ' +  this.brand);
        }
        info() {
            let keys = Object.keys(this);
            let strResult = '';
            keys.forEach(key => {
                if (typeof(this[key]) !== 'undefined') {
                    strResult += `${key}: ${this[key]}\n`;
                }
            });
            console.log(strResult);
        }
        add(file_size) {
            this.used += file_size;
            alert( `Используется ${this.used} мб` );
        }
        remove(file_size) {
            this.used -= file_size;
            alert( `Используется ${this.used} мб` );
        }
        clear() {
            this.used = 0;
            alert( 'Память очищена' );
        }
        test() {
            this.used += 200;
            let delta = 8;
            let speed_write = 200 / delta;
            let speed_read = speed_write * 5;
            this.used = 0; 
            alert( `speed_write: ${speed_write} mb/s\nspeed_read: ${speed_read} mb/s`);
        }
    }

    class Hdd extends Memory {
        constructor(brand, capacity, interFace, cache, speed) {
            super(brand, capacity);
            this.interface = interFace;
            this.cache = cache;
            this.speed = speed;
        }
        createPartition() {
            alert( 'Создан раздел C, размер ' + this.capacity);
        }
        deletePartition() {
            alert( 'Удален раздел C, размер ' + this.capacity);
        }
    }

    class Ssd extends Hdd {
        constructor(brand, capacity, type, memoryType) {
            super(brand, capacity);
            this.type = type;
            this.memoryType = memoryType; 
        }
    }

    class Flash extends Memory {
        constructor(brand, capacity, type) {
            super(brand, capacity);
            this.type = type;
        }
    }
    class Diskette extends Flash {
        constructor(brand, capacity, type) {
            super(brand, capacity, type);
        }
    }
    class Ram extends Memory {
        constructor(brand, capacity, type) {
            super(brand, capacity);
            this.type = type;
        }
    }

    let ssd = new Ssd('Toshiba', '120 гб', 'internal', 'TLC');
    ssd.mount();
    ssd.info();
    ssd.createPartition();
    ssd.add(30);
    ssd.info();
    let hdd = new Hdd('Seagate', '250гб', 'SATA3', '64мб', '7200rpm');
    hdd.info();
    let flash = new Flash('Kingston', '32гб', 'usb2.0');
    flash.info();
    let ram = new Ram('Samsung', '8гб', 'DDR4');
    ram.info();
    flash.test();
})();