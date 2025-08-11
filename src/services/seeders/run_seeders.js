//Este ejecutara archivo es para enviar los datos que estan en csv a mysql

import { uploadForDb2 } from "./load_autor.js";
import { uploadForDb3 } from "./load_books.js";
import { uploadForDb5 } from "./load_loans.js";
import { uploadForDb4 } from "./load_status.js";
import { uploadForDb } from "./load_user.js";

(async () => {
    try {
        console.log('🚀 Iniciando seeders...');

         await uploadForDb();
         await uploadForDb2();
        await uploadForDb3();
        await uploadForDb4();
        await uploadForDb5();

        console.log('✅ Todos los seeders ejecutados correctamente.');
    } catch (error) {
        console.error('❌ Error ejecutando los seeders:', error.message);
    } finally {
        process.exit();
    }
})()