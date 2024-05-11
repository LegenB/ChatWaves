CREATE TABLE chat (
    id_chat        VARCHAR2(50 CHAR) NOT NULL,
    nombre         VARCHAR2(50 CHAR) NOT NULL,
    foto           BLOB,
    descripcion    VARCHAR2(1000 CHAR),
    fecha_creacion TIMESTAMP WITH TIME ZONE NOT NULL
);

ALTER TABLE chat ADD CONSTRAINT chat_pk PRIMARY KEY ( id_chat );

CREATE TABLE chatglobal (
    id_chat_global VARCHAR2(20 CHAR) NOT NULL,
    nombre         VARCHAR2(150 CHAR) NOT NULL,
    foto           BLOB NOT NULL,
    descripcion    VARCHAR2(1000 CHAR) NOT NULL
);

ALTER TABLE chatglobal ADD CONSTRAINT chatglobal_pk PRIMARY KEY ( id_chat_global );

CREATE TABLE mensaje (
    id_mensaje           VARCHAR2(20 CHAR) NOT NULL,
    usuario_id_usuario   VARCHAR2(50 CHAR) NOT NULL,
    chat_privado_id_chat VARCHAR2(50 CHAR) NOT NULL,
    contenido            VARCHAR2(2000 CHAR) NOT NULL,
    fecha_envio          DATE NOT NULL
);

ALTER TABLE mensaje ADD CONSTRAINT mensaje_pk PRIMARY KEY ( id_mensaje );

CREATE TABLE mensaje_global (
    id_mensaje                VARCHAR2(20 CHAR) NOT NULL,
    usuario_id_usuario        VARCHAR2(50 CHAR) NOT NULL,
    contenido                 VARCHAR2(2000 CHAR) NOT NULL,
    fecha_envio               DATE NOT NULL,
    chatglobal_id_chat_global VARCHAR2(20 CHAR) NOT NULL
);

ALTER TABLE mensaje_global ADD CONSTRAINT mensajev1_pk PRIMARY KEY ( id_mensaje );

CREATE TABLE miembros_canales (
    usuario_id_usuario   VARCHAR2(50 CHAR) NOT NULL,
    chat_privado_id_chat VARCHAR2(50 CHAR) NOT NULL
);

CREATE TABLE usuario (
    id_usuario                VARCHAR2(50 CHAR) NOT NULL,
    nombre                    VARCHAR2(150 CHAR) NOT NULL,
    email                     VARCHAR2(50 CHAR) NOT NULL,
    password                  VARCHAR2(50 CHAR) NOT NULL,
    fecha_nacimiento          TIMESTAMP NOT NULL,
    foto_perfil               BLOB,
    estado                    VARCHAR2(500 CHAR) NOT NULL,
    chatglobal_id_chat_global VARCHAR2(20 CHAR) NOT NULL
);

ALTER TABLE usuario ADD CONSTRAINT usuario_pk PRIMARY KEY ( id_usuario );

ALTER TABLE mensaje
    ADD CONSTRAINT mensaje_chat_privado_fk FOREIGN KEY ( chat_privado_id_chat )
        REFERENCES chat ( id_chat );

ALTER TABLE mensaje
    ADD CONSTRAINT mensaje_usuario_fk FOREIGN KEY ( usuario_id_usuario )
        REFERENCES usuario ( id_usuario );

ALTER TABLE mensaje_global
    ADD CONSTRAINT mensajev1_chatglobal_fk FOREIGN KEY ( chatglobal_id_chat_global )
        REFERENCES chatglobal ( id_chat_global );

ALTER TABLE mensaje_global
    ADD CONSTRAINT mensajev1_usuario_fk FOREIGN KEY ( usuario_id_usuario )
        REFERENCES usuario ( id_usuario );

ALTER TABLE miembros_canales
    ADD CONSTRAINT miembros_canales_chat_fk FOREIGN KEY ( chat_privado_id_chat )
        REFERENCES chat ( id_chat );

ALTER TABLE miembros_canales
    ADD CONSTRAINT miembros_canales_usuario_fk FOREIGN KEY ( usuario_id_usuario )
        REFERENCES usuario ( id_usuario );

ALTER TABLE usuario
    ADD CONSTRAINT usuario_chatglobal_fk FOREIGN KEY ( chatglobal_id_chat_global )
        REFERENCES chatglobal ( id_chat_global );