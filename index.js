

const books = [
    {
        id: 1,
        title: "Network",
        image: "./imgs/security.jpg",
        description: "A network, in its simplest form, is a system of interconnected devices (like computers) that allows them to communicate and share resources or information. "
    },
    {
        id: 2,
        title: "Internet",
        image: "./imgs/hacking1.jpg",
        description: "The internet is defined as a global network of linked computers, servers, phones, and smart appliances that communicate with each other using the transmission control protocol (TCP) standard to enable the fast exchange of information and files, along with other types of services. "
    },
    {
        id: 3,
        title: "Web Development",
        image: "./imgs/web-dev.jpg",
        description: "Web development refers to the creating, building, and maintaining of websites. It includes aspects such as web design, web publishing, web programming, and database management. It is the creation of an application that works over the internet i.e. websites. Web development is typically broken down into 3 core areas: Frontend, Backend, Full Stack Development. "
    },
    {
        id: 4,
        title: "Cyber Security",
        image: "./imgs/cyber-security.jpg",
        description: "Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks."
    },
    {
        id: 5,
        title: "Data Science",
        image: "./imgs/data-science.jpg",
        description: "Data science is a multidisciplinary field that uses scientific methods, processes, algorithms and systems to extract knowledge and insights from structured and unstructured data."
    },
    {
        id: 6,
        title: "Artificial Intelligence",
        image: "./imgs/ai.jpg",
        description: "Artificial intelligence (AI) is the simulation of human intelligence processes by machines, especially computer systems."
    },
    {
        id: 7,
        title: "Machine Learning",
        image: "./imgs/machine-learning.jpg",
        description: "Machine learning is an application of artificial intelligence (AI) that provides systems the ability to automatically learn and improve from experience without being explicitly programmed."
    },
    {
        id: 8,
        title: "Deep Learning",
        image: "./imgs/deep-learning.jpg",
        description: "Deep learning is a subset of machine learning where artificial neural networks, algorithms inspired by the human brain, learn from large amounts of data."
    },
    {
        id: 9,
        title: "Blockchain",
        image: "./imgs/blockchain.jpg",
        description: "A blockchain is a growing list of records, called blocks, that are linked using cryptography."
    },
    {
        id: 10,
        title: "Quantum Computing",
        image: "./imgs/quantum-computing.jpg",
        description: "Quantum computing is the exploitation of collective properties of quantum states, such as superposition and entanglement, to perform computation."
    },
    {
        id: 11,
        title: "Cloud Computing",
        image: "./imgs/book.jpg",        
        description: "មិនដណ្តើមឈ្នះចាញ់ តែដណ្តើមត្រូវខុស មិនថា​សង្គម​ចលាចល ឬពិបាក​រស់នៅ​ប៉ុនណា​ទេ អ្វី​ដែល​យើង​ត្រូវ​ធ្វើ គឺ​មិនមែន​ដណ្តើម​ឈ្នះ​និង​ចាញ់​ទេ តែ​គឺ​ដណ្តើម​ត្រូវ​និង​ខុស។ រស់នៅ​ត្រូវ​ឈរ​លើ​ភាព​ត្រឹមត្រូវ​ឱ្យ​ច្រើន​បំផុត តាមដែល​អាច​ធ្វើ​ទៅ​បាន។ រស់នៅ​មិនមែន​ដើម្បី​ដណ្តើម​អំណាច​ទេ តែ​គឺ​ត្រូវ​ដណ្តើម​សេចក្តី​សុខ​ឱ្យ​អ្នក​ទន់ខ្សោយ ដណ្តើម​ភាពស្មើគ្នា​ឱ្យ​អ្នក​រង​អយុត្តិធម៌ ដណ្តើម​ស្នាមញញឹម​ឱ្យ​អ្នក​កំពុង​ទឹកភ្នែក​ហូរ។ បើ​យើង​ជា​អ្នកកាន់សីល មានធម៌ អាច​បំបែក​ចិត្ត​និង​កាយ​របស់​ខ្លួន​ឱ្យ​ដាច់​ពីគ្នា​បាន ដឹង​ថា​ខ្លួន​មិនមែន​ខ្លួន ដឹង​ថា​ខ្លួន​មិនមែន​ជា​សម្បក ដឹង​ថា​សម្បក​គ្រាន់តែ​ជា​ជម្រក​វិញ្ញាណ​ស្នាក់អាស្រ័យ យើង​នឹង​ទទួលអារម្មណ៍​ថា “យើង​គ្មានអ្វី​ត្រូវ​ពាក់​ព័ន្ធ​​នឹង​ត្រឹម​សេចក្តី​សុខ​ផ្លូវកាយ មិន​ពាក់​ព័ន្ធ​នឹង​អំណាច​ដែល​ជា​របស់​មិន​ទៀង មិនពាក់​ព័ន្ធនឹង​ជាតិសាសន៍ ឬសង្គមមនុស្ស” ឡើយ។ ថ្វី​ដ្បិតតែ​ដឹង​ច្បាស់​ក្នុងចិត្ត​ថា​ជីវិត​មិន​មាន​អ្វី​ទាំងអស់ មិនមែន​ជា​អ្វី​ទាំងអស់ តែ​អ្នក​ត្រាស់​ដឹង និង​អ្នកប្រាជ្ញ​ក្នុង​លោក​តែង​សោយសោក​អាណិត​សង្វេគ​ដល់​សព្វ​​សត្វ​ដែល​រងទុក្ខ​វេទនា។ ការ​រក​ឃើញ​ដំបូង​ដ៏​ធំ​របស់​អ្នកប្រាជ្ញ ទស្សនវិទូ និង​អ្នក​ត្រាស់​ដឹង គឺ​រក​ឃើញ​ខ្លួនឯង ហើយ​ប្រើប្រាស់​សម្បក​និង​ដួងចិត្ត​ករុណា​ធម៌​ដើម្បី​ជួយ​ដល់​អ្នកដទៃ។ បើ​គ្មាន​អ្នក​ដែល​បាន​លះបង់​ដើម្បី​យើង​ជា​មនុស្ស​ជំនាន់​នេះ ក៏​គ្មាន​យើង​ថ្ងៃនេះ​ដែរ។ ដូច្នេះ ជា​ការ​តបស្នង​គុណ​ដល់​អ្នក​ជំនាន់​មុន ចូរ​យើង​រស់នៅ​លើទឹក​ដី​នេះ ខិតខំ​ប្រឹងប្រែង លះបង់​ដើម្បី​ជា​ប្រយោជន៍​ដល់​អ្នក​ជំនាន់​ក្រោយ​យើង​បន្ត​ទៀត។ ចូរ​ប្រើប្រាស់​សម្បក​កាយ​របស់​យើង​ឱ្យ​មានប្រយោជន៍​ដល់​ដួង​ព្រលឹង​របស់​យើង ហើយ​ចូរ​ប្រើប្រាស់​ដួងចិត្ត​ខាងក្នុង​របស់​យើង​ឱ្យ​មានប្រយោជន៍​ដល់​អ្នកដទៃ។ ត្រូវ​ទទួល​​ដឹង​ថា “ការ​បែកបាក់​ក្នុង​សង្គម​គឺ​ពិតជា​មាន បាន​កើតឡើង និង​កំពុង​កើតឡើង...” ហើយក៏​ត្រូវ​ទទួល​​ដឹង​​ទៀត​ថា “គ្រប់ការ​ឡើង​ខ្ពស់​សុទ្ធតែ​មាន​ធ្លាក់ចុះ​ក្រោម​វិញ​ ហើយ​គ្រប់ការ​ធ្លាក់​​ចុះ​ក្រោម​សុទ្ធតែ​មាន​ការ​ឡើង​ខ្ពស់​វិញ​។” នេះ​ជា​ធម្មជាតិ​នៃ​សង្គម​ ដែល​​​​ភពផែន​ដី​នេះ​កំពុងតែ​ប្រព្រឹត្ត​ឡើង។ ខ្ញុំ​មិនដឹង​ថា​ចក្រវាល​ទាំងមូល​មាន​អ្វីខ្លះ​ទេ តែ​គ្រាន់តែ​ដឹង​ច្បាស់​ថា “អ្វី​ក៏មានដែរ ពោល​គឺ​សព្វ​សត្វ សព្វសារពើ”។ ខ្ញុំ​មិនដឹង​ថា​មាន​ភពផែន​ដី​នៅឯណា​ខ្លះ ឬផ្នែក​ណាខ្លះ​នៃ​ចក្រវាល ចម្ងាយ​ប៉ុន្មាន​ពី​ភពផែន​ដី​ដែល​យើង​កំពុង​ស្នាក់​ងា​ស្រ័យ តែ​ខ្ញុំ​ដឹង​​ថា “ភពផែន​ដី​មាន​ច្រើន​ជាអនេក មិនមែន​មាន​មួយ ឬមាន​ពីរ...។"
    },
    {
        id: 12,
        title: "ប្រតិទិនទស្សនៈ",
        image: "./imgs/book.png",
        description: "✅ ការបែកបាក់សង្គម គឺចាប់ផ្តើមពីការចែកបក្សចែកពួកគ្នា។  ការគាំទ្រ គឺគាំទ្របក្ស គាំទ្រក្រុម ដោយមិនខ្វល់ថាក្រុមខ្លួនខុសឬត្រូវ និងល្អឬអាក្រក់ទេ។ អ្នកធ្វើរឿងត្រឹមត្រូវ បើគ្មានបក្ស គឺគ្មានអ្នកគាំទ្រ។ អ្នកឈរខាងសច្ចភាព ឈរខាងការពិត បើគ្មានបក្ស គឺប្រឈមនឹងគ្រោះថ្នាក់។ មូលដ្ឋានគ្រឹះដែលនាំឱ្យមានការបែកបាក់នៅគ្រប់ច្រកល្ហកនៃសង្គម គឺដោយសារតែមនុស្សបែកបាក់ជាមួយខ្លួនឯង។<br> មូលហេតុដែលមនុស្សបែកបាក់ជាមួយខ្លួនឯង គឺដោយសារតែវង្វេងខ្លួនឯង ដូចជាដៃមិនស្គាល់ជើង ភ្លើងមិនស្គាល់ឱស ភ្នែកមិនស្គាល់ច្រមុះ ខ្លួនមិនស្គាល់ចិត្ត ក្បាលមិនស្គាល់បេះដូង។ ភាពតែមួយនៃរូបរាងកាយត្រូវបែកបាក់គ្នាចេញជាចម្រៀកៗ ប្រៀបដូចជាពូជសាសន៍មួយដែលកើតចេញពីឈាមជ័រតែមួយ ក្លាយទៅជាលែងស្គាល់បងប្អូនឯងអ៊ីចឹង។ លក្ខណៈនៃមនុស្សមិនស្គាល់ខ្លួនឯង គឺចូលចិត្តយកមុខមាត់ ចូលចិត្តឱ្យអ្នកដទៃសរសើរ ខឹងពេលអ្នកដទៃរិះគន់ ជាន់ពេលមានអំណាចលើអ្នកដទៃ។ល។ ប៉ុន្តែសម្រាប់លក្ខណៈបុគ្គលដែលស្គាល់ខ្លួនឯងច្បាស់ និងមិនបែកបាក់ជាមួយខ្លួនឯង គឺបើមានអ្នកដទៃសរសើរ តែងហាមាត់និយាយអរគុណក្នុងន័យគួរសម្យ ឬបើមានអ្នកដទៃបង្អាប់ ពិចារណាលើខ្លួនឯងម្តងទៀតតាមដែលអាចទៅរួច។ ចុះអ្វីជាលក្ខណៈបែកបាក់របស់សង្គម? ការបែកបាក់សង្គម គឺចាប់ផ្តើមពីការចែកបក្សចែកពួកគ្នា។ ការគាំទ្រ គឺគាំទ្របក្ស គាំទ្រក្រុម ដោយមិនខ្វល់ថាក្រុមខ្លួនខុសឬត្រូវ និងល្អឬអាក្រក់ទេ។ អ្នកធ្វើរឿងត្រឹមត្រូវ បើគ្មានបក្ស គឺគ្មានអ្នកគាំទ្រ។ អ្នកឈរខាងសច្ចភាព ឈរខាងការពិត បើគ្មានបក្ស គឺប្រឈមនឹងគ្រោះថ្នាក់។ បង្កើតក្រុម ផ្តុំឱ្យមានការគាំទ្រ រហូតដល់មានបញ្ហាទាស់ទែងគ្នា ក៏ហៅបក្សហៅពួកឱ្យជួយគ្នាទាំងទទឹងទិស។ តើអ្នកណាបែកបាក់ជាមួយអ្នកណា? អ្នកនិពន្ធបែកបាក់តាមបែបអ្នកនិពន្ធ។ អ្នកសាសនាបែកបាក់តាមបែបអ្នកសាសនា។ អ្នកសារព័ត៌មានបែកបាក់តាមបែបអ្នកសារព័ត៌មាន។ អ្នកនយោបាយបែកបាក់តាមបែបអ្នកនយោបាយ។ អ្នកសិក្សាបែកបាក់តាមបែបអ្នកសិក្សា។ និស្សិតបែកបាក់តាមបែបនិស្សិត។ល។ "
    },


];

// Function to store selected book in localStorage
function storeDetails(id) {
    const book = books.find(item => item.id === id);
    if (book) {
        localStorage.setItem("selectedBook", JSON.stringify(book));
        window.location.href = "details.html"; // Redirect to details page
    }
}
// Function to display books
function displayBooks(filteredBooks = books) {
    const bookList = document.getElementById("bookList");
    bookList.innerHTML = ""; // Clear previous content

    filteredBooks.forEach(book => {
        bookList.innerHTML += `
            <div class="bg-white shadow-lg rounded-lg overflow-hidden">
                <img src="${book.image}" alt="${book.title}" class="w-full h-48 object-cover">
                <div class="p-6">
                    <h2 class="text-xl font-semibold">${book.title}</h2>
                    <p class="text-gray-600 mt-2">${book.description}</p>
                    <a href="#" onclick="storeDetails(${book.id})" class="inline-block mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
                        Read more →
                    </a>
                </div>
            </div>
        `;
    });
}

// Function to store selected book details
function storeDetails(id) {
    const book = books.find(item => item.id === id);
    if (book) {
        localStorage.setItem("selectedBook", JSON.stringify(book));
        window.location.href = "details.html"; // Redirect to details page
    }
}

// Function to filter books based on search input
function searchBooks() {
    const query = document.getElementById("searchInput").value.toLowerCase();
    const filteredBooks = books.filter(book => book.title.toLowerCase().includes(query));
    displayBooks(filteredBooks);
}

// Attach event listener to search input
document.getElementById("searchInput").addEventListener("input", searchBooks);

// Load books on page load
window.onload = () => displayBooks();

