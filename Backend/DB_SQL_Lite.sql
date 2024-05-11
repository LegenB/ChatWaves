CREATE TABLE chat (
    id_chat        TEXT NOT NULL,
    nombre         TEXT NOT NULL,
    foto           BLOB,
    descripcion    TEXT,
    fecha_creacion TEXT NOT NULL,
    PRIMARY KEY (id_chat)
);

CREATE TABLE chatglobal (
    id_chat_global TEXT NOT NULL,
    nombre         TEXT NOT NULL,
    foto           BLOB NOT NULL,
    descripcion    TEXT NOT NULL,
    PRIMARY KEY (id_chat_global)
);

CREATE TABLE mensaje (
    id_mensaje           TEXT NOT NULL,
    usuario_id_usuario   TEXT NOT NULL,
    chat_privado_id_chat TEXT NOT NULL,
    contenido            TEXT NOT NULL,
    fecha_envio          TEXT NOT NULL,
    PRIMARY KEY (id_mensaje),
    FOREIGN KEY (chat_privado_id_chat) REFERENCES chat (id_chat),
    FOREIGN KEY (usuario_id_usuario) REFERENCES usuario (id_usuario)
);

CREATE TABLE mensaje_global (
    id_mensaje                TEXT NOT NULL,
    usuario_id_usuario        TEXT NOT NULL,
    contenido                 TEXT NOT NULL,
    fecha_envio               TEXT NOT NULL,
    chatglobal_id_chat_global TEXT NOT NULL,
    PRIMARY KEY (id_mensaje),
    FOREIGN KEY (chatglobal_id_chat_global) REFERENCES chatglobal (id_chat_global),
    FOREIGN KEY (usuario_id_usuario) REFERENCES usuario (id_usuario)
);

CREATE TABLE miembros_canales (
    usuario_id_usuario   TEXT NOT NULL,
    chat_privado_id_chat TEXT NOT NULL,
    FOREIGN KEY (chat_privado_id_chat) REFERENCES chat (id_chat),
    FOREIGN KEY (usuario_id_usuario) REFERENCES usuario (id_usuario)
);

CREATE TABLE usuario (
    id_usuario                TEXT NOT NULL,
    nombre                    TEXT NOT NULL,
    email                     TEXT NOT NULL,
    password                  TEXT NOT NULL,
    fecha_nacimiento          TEXT NOT NULL,
    foto_perfil               BLOB,
    estado                    TEXT NOT NULL,
    chatglobal_id_chat_global TEXT NOT NULL,
    PRIMARY KEY (id_usuario),
    FOREIGN KEY (chatglobal_id_chat_global) REFERENCES chatglobal (id_chat_global)
);