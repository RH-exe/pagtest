navigator.mediaDevices.getUserMedia({ video: true })
            .then(function(stream) {
                document.getElementById('video').srcObject = stream;
            })
            .catch(function(error) {
                console.log("Error al acceder a la cámara: ", error);
            });

        function guardarFoto() {
            const video = document.getElementById("video");
            const canvas = document.createElement("canvas");
            const contexto = canvas.getContext("2d");
            const nombre = document.getElementById("nombre").value;
            const apellido = document.getElementById("apellido").value;

            if (!nombre || !apellido) {
                alert("Por favor, completa todos los campos.");
                return;
            }

            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            contexto.drawImage(video, 0, 0, canvas.width, canvas.height);

            const fotoBase64 = canvas.toDataURL("image/png");

            // Guardar en localStorage
            const datosUsuario = { nombre, apellido, fotoBase64 };
            localStorage.setItem("usuario", JSON.stringify(datosUsuario));

            alert("Datos y foto guardados!");

            // Mostrar la imagen guardada
            mostrarDatos();
        }

        

        // Mostrar datos al cargar la página
        