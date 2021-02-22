
/* ---------------------------------------------------------------------- */
/* "concessionaria"                                                       */
/* ---------------------------------------------------------------------- */

INSERT INTO concessionaria 
    ( cod_concessionaria, nom_concessionaria,  cod_usuario_criacao )
VALUES
    ( 0, 'Dummy',  0);


INSERT INTO concessionaria 
    ( cod_concessionaria, nom_concessionaria, cod_usuario_criacao )
VALUES
    ( 1, 'Teste', 0);


/* ---------------------------------------------------------------------- */
/*"usuario"                                                               */
/* ---------------------------------------------------------------------- */

INSERT INTO usuario 
    ( cod_usuario, nom_usuario, dsc_login, dsc_senha, cod_tipo_perfil, ind_ativo, cod_concessionaria, cod_usuario_criacao )
    VALUES
    ( 0, 'System', 'system', 'xxx', 'SYSTEM', 'S', 0, 0);

INSERT INTO usuario 
    ( cod_usuario, nom_usuario, dsc_login, dsc_senha, cod_tipo_perfil, ind_ativo, cod_concessionaria, cod_usuario_criacao )
    VALUES
    ( 1, 'Master', 'master', 'xxx', 'MASTER', 'S', 1, 0);

INSERT INTO usuario 
    ( cod_usuario, nom_usuario, dsc_login, dsc_senha, cod_tipo_perfil, ind_ativo, cod_concessionaria, cod_usuario_criacao )
    VALUES
    ( 2, 'Admin', 'admin', 'xxx', 'ADMIN', 'S', 1, 1 );

INSERT INTO usuario 
    ( cod_usuario, nom_usuario, dsc_login, dsc_senha, cod_tipo_perfil, ind_ativo, cod_concessionaria, cod_usuario_criacao )
    VALUES
    ( 3, 'Config', 'config', 'xxx', 'CONFIG', 'S', 1, 1 );

INSERT INTO usuario 
    ( cod_usuario, nom_usuario, dsc_login, dsc_senha, cod_tipo_perfil, ind_ativo, cod_concessionaria, cod_usuario_criacao )
    VALUES
    ( 4, 'Analista', 'analista', 'xxx', 'ANALISTA', 'S', 1, 1 );


/* ---------------------------------------------------------------------- */
/* "icone"                                                          */
/* ---------------------------------------------------------------------- */

INSERT INTO icone
    (
    cod_icone, nom_icone, dsc_icone, nom_arquivo_imagem, nom_arquivo_audio, ind_ativo, cod_usuario_criacao, dat_criacao, dat_atualizacao )
VALUES
    ( 1, 'Vire a Direita', 'Virar a direita', 'ic_0001_virar_direita.png', 'ic_virar_direita.mp3', 'S', 3, Now(), Now() );

INSERT INTO icone
    (
    cod_icone, nom_icone, dsc_icone, nom_arquivo_imagem, nom_arquivo_audio, ind_ativo, cod_usuario_criacao, dat_criacao, dat_atualizacao )
VALUES
    ( 2, 'Vire a Esquerda', 'Virar a esquerda', 'ic_0002_virar_esquerda.png', 'ic_virar_esquerda.mp3', 'S', 3, Now(), Now() );

INSERT INTO icone
    (
    cod_icone, nom_icone, dsc_icone, nom_arquivo_imagem, nom_arquivo_audio, ind_ativo, cod_usuario_criacao, dat_criacao, dat_atualizacao )
VALUES
    ( 3, 'Siga Reto', 'Seguir Reto', 'ic_0003_seguir_reto.png', 'ic_0003_seguir_reto.mp3', 'S', 3, Now(), Now() );

INSERT INTO icone
    (
    cod_icone, nom_icone, dsc_icone, nom_arquivo_imagem, nom_arquivo_audio, ind_ativo, cod_usuario_criacao, dat_criacao, dat_atualizacao )
VALUES
    ( 4, 'Cinto de Segurança', 'Cinto de Segurança', 'ic_0004_cinto_seguranca.png', 'ic_0004_cinto_seguranca.mp3', 'S', 3, Now(), Now() );

INSERT INTO icone
    (
    cod_icone, nom_icone, dsc_icone, nom_arquivo_imagem, nom_arquivo_audio, ind_ativo, cod_usuario_criacao, dat_criacao, dat_atualizacao )
VALUES
    ( 5, 'Retorno 180', 'Retorno 180', 'ic_0005_retorno_180.png', 'ic_0004_retorno_180.mp3', 'S', 3, Now(), Now() );

INSERT INTO icone
    (
    cod_icone, nom_icone, dsc_icone, nom_arquivo_imagem, nom_arquivo_audio, ind_ativo, cod_usuario_criacao, dat_criacao, dat_atualizacao )
VALUES
    ( 6, 'Volte Para rota', 'Volte Para rota', 'ic_0006_volte_para_rota.png', 'ic_0006_volte_para_rota.mp3', 'S', 3, Now(), Now() );

INSERT INTO icone
    (
    cod_icone, nom_icone, dsc_icone, nom_arquivo_imagem, nom_arquivo_audio, ind_ativo, cod_usuario_criacao, dat_criacao, dat_atualizacao )
VALUES
    ( 7, 'Volte Para rota Alerta', 'Volte Para rota Alerta', 'ic_0007_volte_para_rota_alerta.png', 'ic_0007_volte_para_rota_alerta.mp3', 'S', 3, Now(), Now() );

INSERT INTO icone
    (
    cod_icone, nom_icone, dsc_icone, nom_arquivo_imagem, nom_arquivo_audio, ind_ativo, cod_usuario_criacao, dat_criacao, dat_atualizacao )
VALUES
    ( 8, 'Alerta', 'Alerta', 'ic_0008_alerta.png', 'ic_0008_alerta.mp3', 'S', 3, Now(), Now() );

INSERT INTO icone
    (
    cod_icone, nom_icone, dsc_icone, nom_arquivo_imagem, nom_arquivo_audio, ind_ativo, cod_usuario_criacao, dat_criacao, dat_atualizacao )
VALUES
    ( 9, 'Linha de Ferro', 'Linha de Ferro', 'ic_0009_linha_de_ferro.png', 'ic_0009_linha_de_ferro.mp3', 'S', 3, Now(), Now() );

INSERT INTO icone
    (
    cod_icone, nom_icone, dsc_icone, nom_arquivo_imagem, nom_arquivo_audio, ind_ativo, cod_usuario_criacao, dat_criacao, dat_atualizacao )
VALUES
    ( 10, 'Pegue Primeira Saída', 'Pegue Primeira Saída', 'ic_0010_pegue_primeira_saida.png', 'ic_0010_pegue_primeira_saida.mp3', 'S', 3, Now(), Now() );

INSERT INTO icone
    (
    cod_icone, nom_icone, dsc_icone, nom_arquivo_imagem, nom_arquivo_audio, ind_ativo, cod_usuario_criacao, dat_criacao, dat_atualizacao )
VALUES
    ( 11, 'Pegue Segunda Saída', 'Pegue Segunda Saída', 'ic_0011_pegue_segunda_saida.png', 'ic_0011_pegue_segunda_saida.mp3', 'S', 3, Now(), Now() );

INSERT INTO icone
    (
    cod_icone, nom_icone, dsc_icone, nom_arquivo_imagem, nom_arquivo_audio, ind_ativo, cod_usuario_criacao, dat_criacao, dat_atualizacao )
VALUES
    ( 12, 'Pegue Terceira Saída', 'Pegue Terceira Saída', 'ic_0012_pegue_terceira_saida.png', 'ic_0012_pegue_terceira_saida.mp3', 'S', 3, Now(), Now() );

INSERT INTO icone
    (
    cod_icone, nom_icone, dsc_icone, nom_arquivo_imagem, nom_arquivo_audio, ind_ativo, cod_usuario_criacao, dat_criacao, dat_atualizacao )
VALUES
    ( 13, 'Virar Esquerda Via Oposta', 'Virar Esquerda Via Oposta', 'ic_0013_virar_esquerda_via_oposta.png', 'ic_0013_virar_esquerda_via_oposta.mp3', 'S', 3, Now(), Now() );

INSERT INTO icone
    (
    cod_icone, nom_icone, dsc_icone, nom_arquivo_imagem, nom_arquivo_audio, ind_ativo, cod_usuario_criacao, dat_criacao, dat_atualizacao )
VALUES
    ( 14, 'Alto Falante', 'Alto Falante', 'ic_0014_alto_falante.png', 'ic_0014_alto_falante.mp3', 'S', 3, Now(), Now() );


/* ---------------------------------------------------------------------- */
/* "midia"                                                                */
/* ---------------------------------------------------------------------- */

INSERT INTO midia
    ( cod_midia, nom_midia, nom_arquivo, cod_tipo_midia, ind_ativo, cod_concessionaria, cod_usuario_criacao, dat_criacao, dat_atualizacao )
VALUES
    ( 1, 'Teste Introducao', 'ma_00001_introducao.mp3', 'AUDIO', 'S', 1, 3, Now(), Now() );

INSERT INTO midia
    ( cod_midia, nom_midia, nom_arquivo, cod_tipo_midia, ind_ativo, cod_concessionaria, cod_usuario_criacao, dat_criacao, dat_atualizacao )
VALUES
    ( 2, 'Volante', 'ma_00002_volante.mp3', 'AUDIO', 'S', 1, 3, Now(), Now() );

INSERT INTO midia
    ( cod_midia, nom_midia, nom_arquivo, cod_tipo_midia, ind_ativo, cod_concessionaria, cod_usuario_criacao, dat_criacao, dat_atualizacao )
VALUES
    ( 3, 'Cinto Segurança', 'mi_00003_cinto_seguranca.jpg', 'IMAGEM', 'S', 1, 3, Now(), Now() );

INSERT INTO midia
    ( cod_midia, nom_midia, nom_arquivo, cod_tipo_midia, ind_ativo, cod_concessionaria, cod_usuario_criacao, dat_criacao, dat_atualizacao )
VALUES
    ( 4, 'Ajuste Retrovisor', 'mv_00004_ajuste_retrovisor.mp4', 'VIDEO', 'S', 1, 3, Now(), Now() );

INSERT INTO midia
    ( cod_midia, nom_midia, nom_arquivo, cod_tipo_midia, ind_ativo, cod_concessionaria, cod_usuario_criacao, dat_criacao, dat_atualizacao )
VALUES
    ( 5, 'Teto Solar', 'ma_00005_teto_solar.mp3', 'AUDIO', 'S', 1, 3, Now(), Now() );


/* ---------------------------------------------------------------------- */
/* "check_list"                                                          */
/* ---------------------------------------------------------------------- */

INSERT INTO check_list
    ( cod_check_list, nom_check_list, ind_ativo, cod_concessionaria, cod_usuario_criacao, dat_criacao, dat_atualizacao )
VALUES
    ( 1, 'Nome check_list', 'S', 1, 3, Now(), Now() );

/* ---------------------------------------------------------------------- */
/* "experiencia"                                                          */
/* ---------------------------------------------------------------------- */

INSERT INTO experiencia
    ( cod_experiencia, nom_experiencia, cod_check_list, cod_fase_avancada, ind_ativo, cod_concessionaria, cod_usuario_criacao, dat_criacao, dat_atualizacao )
VALUES
    ( 1, 'rota teste Marcos 1', 1, 6, 'S', 1, 3, Now(), Now());


/* ---------------------------------------------------------------------- */
/* "detalhe_check_list"                                                          */
/* ---------------------------------------------------------------------- */

INSERT INTO detalhe_check_list
    ( cod_detalhe_check_list, cod_check_list, num_sequencia, dsc_texto_check_list, cod_concessionaria, cod_usuario_criacao, dat_criacao, dat_atualizacao )
VALUES
    ( 1, 1, 1, "Motor", 1, 3, Now(), Now() );

INSERT INTO detalhe_check_list
    ( cod_detalhe_check_list, cod_check_list, num_sequencia, dsc_texto_check_list, cod_concessionaria, cod_usuario_criacao, dat_criacao, dat_atualizacao )
VALUES
    ( 2, 1, 2, "Assistente de ré", 1, 3, Now(), Now() );

INSERT INTO detalhe_check_list
    ( cod_detalhe_check_list, cod_check_list, num_sequencia, dsc_texto_check_list, cod_concessionaria, cod_usuario_criacao, dat_criacao, dat_atualizacao )
VALUES
    ( 3, 1, 3, "Faróis Thor", 1, 3, Now(), Now() );

INSERT INTO detalhe_check_list
    ( cod_detalhe_check_list, cod_check_list, num_sequencia, dsc_texto_check_list, cod_concessionaria, cod_usuario_criacao, dat_criacao, dat_atualizacao )
VALUES
    ( 4, 1, 4, "Porta malas", 1, 3, Now(), Now() );

INSERT INTO detalhe_check_list
    ( cod_detalhe_check_list, cod_check_list, num_sequencia, dsc_texto_check_list, cod_concessionaria, cod_usuario_criacao, dat_criacao, dat_atualizacao )
VALUES
    ( 5, 1, 5, "Park assistant", 1, 3, Now(), Now() );

/* ---------------------------------------------------------------------- */
/* "fase_experiencia"                                                     */
/* ---------------------------------------------------------------------- */

INSERT INTO fase_experiencia
    ( cod_fase_experiencia, cod_experiencia, cod_fase, cod_tipo_fase, num_sequencia, cod_concessionaria, cod_usuario_criacao, dat_criacao, dat_atualizacao )
VALUES
    ( 1, 1, 1, 'INFO', 1, 1, 3, Now(), Now());

INSERT INTO fase_experiencia
    ( cod_fase_experiencia, cod_experiencia, cod_fase, cod_tipo_fase, num_sequencia, cod_concessionaria, cod_usuario_criacao, dat_criacao, dat_atualizacao )
VALUES
    ( 2, 1, 1, 'rota', 2, 1, 3, Now(), Now());

INSERT INTO fase_experiencia
    ( cod_fase_experiencia, cod_experiencia, cod_fase, cod_tipo_fase, num_sequencia, cod_concessionaria, cod_usuario_criacao, dat_criacao, dat_atualizacao )
VALUES
    ( 3, 1, 1, 'INFO', 3, 1, 3, Now(), Now());

INSERT INTO fase_experiencia
    ( cod_fase_experiencia, cod_experiencia, cod_fase, cod_tipo_fase, num_sequencia, cod_concessionaria, cod_usuario_criacao, dat_criacao, dat_atualizacao )
VALUES
    ( 4, 1, 1, 'AVAL', 4, 1, 3, Now(), Now());


/* ---------------------------------------------------------------------- */
/* "trajeto"                                                    */
/* ---------------------------------------------------------------------- */

INSERT INTO trajeto 
    ( cod_trajeto, nom_trajeto, dsc_trajeto, qtd_pontos, ind_ativo, cod_concessionaria, cod_usuario_criacao, dat_criacao, dat_atualizacao )
VALUES 
    ( 1, 'trajeto 01', 'trajeto Teste 01', 25, 'S', 1, 3, Now(), Now() ); 


/* ---------------------------------------------------------------------- */
/* "ponto_trajeto"                                                        */
/* ---------------------------------------------------------------------- */

/*  PONTOS trajeto 01 */
INSERT INTO ponto_trajeto 
    (cod_ponto_trajeto,  nom_ponto_trajeto, cod_trajeto, num_sequencia, num_posicao_x, num_posicao_y, cod_concessionaria,  cod_usuario_criacao, dat_criacao, dat_atualizacao )
VALUES
    ( 1, 'Ponto trajeto 1', 1, 1, -19.8216584900502, -43.9439217403633, 1, 3, Now(), Now() );

/*  PONTOS trajeto 02 */
INSERT INTO ponto_trajeto 
    (cod_ponto_trajeto,  nom_ponto_trajeto, cod_trajeto, num_sequencia, num_posicao_x, num_posicao_y, cod_concessionaria,  cod_usuario_criacao, dat_criacao, dat_atualizacao )
VALUES
    ( 2, 'Ponto trajeto 2', 1, 2, -19.825756445122, -43.9408841793287, 1, 3, Now(), Now() );

/*  PONTOS trajeto 03 */
INSERT INTO ponto_trajeto 
    (cod_ponto_trajeto,  nom_ponto_trajeto, cod_trajeto, num_sequencia, num_posicao_x, num_posicao_y, cod_concessionaria,  cod_usuario_criacao, dat_criacao, dat_atualizacao )
VALUES
    ( 3, 'Ponto trajeto 3', 1, 3, -19.8306343131456, -43.9366929491185, 1, 3, Now(), Now() );

/*  PONTOS trajeto 04 */
INSERT INTO ponto_trajeto 
    (cod_ponto_trajeto,  nom_ponto_trajeto, cod_trajeto, num_sequencia, num_posicao_x, num_posicao_y, cod_concessionaria,  cod_usuario_criacao, dat_criacao, dat_atualizacao )
VALUES
    ( 4, 'Ponto trajeto 4', 1, 4, -19.8306343131456, -43.9366929491185, 1, 3, Now(), Now() );

/*  PONTOS trajeto 05 */
INSERT INTO ponto_trajeto 
    (cod_ponto_trajeto,  nom_ponto_trajeto, cod_trajeto, num_sequencia, num_posicao_x, num_posicao_y, cod_concessionaria,  cod_usuario_criacao, dat_criacao, dat_atualizacao )
VALUES
    ( 5, 'Ponto trajeto 5', 1, 5, -19.8341901426767, -43.9401424348499, 1, 3, Now(), Now() );

/*  PONTOS trajeto 06 */
INSERT INTO ponto_trajeto 
    (cod_ponto_trajeto,  nom_ponto_trajeto, cod_trajeto, num_sequencia, num_posicao_x, num_posicao_y, cod_concessionaria,  cod_usuario_criacao, dat_criacao, dat_atualizacao )
VALUES
    ( 6, 'Ponto trajeto 6', 1, 6, -19.8250330218998, -43.9431362372824, 1, 3, Now(), Now() );


/* ---------------------------------------------------------------------- */
/* "informacao" - FASE 1                                                  */
/* ---------------------------------------------------------------------- */

/* Criar a fase em questao */
INSERT INTO informacao
    ( cod_informacao, nom_informacao, dsc_informacao, ind_ativo, cod_concessionaria, cod_usuario_criacao, dat_criacao, dat_atualizacao )
VALUES
    ( 1, 'Info fase 1', 'Teste fase 1 do tipo info', 'S', 1, 3, Now(), Now());

/* Criar as atividades para essa fase */
INSERT INTO atividade
    (
    cod_atividade, cod_informacao, cod_midia, num_sequencia, nom_atividade, cod_tipo_atividade, 
    dsc_texto_visual, dsc_texto_narrado, 
    cod_concessionaria, cod_usuario_criacao, dat_criacao, dat_atualizacao  
    )
VALUES
    ( 
    1, 1, 1, 1, 'Feedback 1', 'SINTVOZ', 
    'atividade feedback inicial', 'Narrando atividade feedback inicial', 
    1, 3, Now(), Now()
    );

/* Criar as atividades para essa fase */
INSERT INTO atividade
    (
    cod_atividade, cod_informacao, cod_midia, num_sequencia, nom_atividade, cod_tipo_atividade, 
    dsc_texto_visual, dsc_texto_narrado, 
    cod_concessionaria, cod_usuario_criacao, dat_criacao, dat_atualizacao  
    )
VALUES
    ( 
    2, 1, 2, 2, 'Feedback 2', 'SINTVOZ', 
    'Segunda atividade de feedback', 'Narrando segunda atividade de feedback', 
    1, 3, Now(), Now()
    );

/* Criar as atividades para essa fase */
/* !!! TEM QUE ADICIONAR A midia !!!  */
INSERT INTO atividade
    (
    cod_atividade, cod_informacao, cod_midia, num_sequencia, nom_atividade, cod_tipo_atividade, 
    dsc_texto_visual, dsc_texto_narrado, 
    cod_concessionaria, cod_usuario_criacao, dat_criacao, dat_atualizacao  
    )
VALUES
    ( 
    3, 1, 3, 3, 'Feedback imagem', 'SINTVOZ', 
    'Feedback com imagem', 'Narrando feedback com imagem',
    1, 3, Now(), Now()
    );

/* Criar as atividades para essa fase */
INSERT INTO atividade
    (
    cod_atividade, cod_informacao, cod_midia, num_sequencia, nom_atividade, cod_tipo_atividade, 
    dsc_texto_visual, dsc_texto_narrado, 
    cod_concessionaria, cod_usuario_criacao, dat_criacao, dat_atualizacao  
    )
VALUES
    ( 
    4, 1, 4, 4, 'Feedback pos imagem', 'SINTVOZ', 
    'Feedback depois de ter mostrado a imagem', 'Narrando feedback depois de ter mostrado a imagem', 
    1, 3, Now(), Now()
    );

/* Criar as atividades para essa fase */
/* !!! TEM QUE ADICIONAR A midia !!!  */
INSERT INTO atividade
    (
    cod_atividade, cod_informacao, cod_midia, num_sequencia, nom_atividade, cod_tipo_atividade, 
    dsc_texto_visual, dsc_texto_narrado, 
    cod_concessionaria, cod_usuario_criacao, dat_criacao, dat_atualizacao  
    )
VALUES
    ( 
    5, 1, 5, 5, 'Feedback video', 'SINTVOZ', 
    'Feedback com video', 'Narrando feedback com video',
    1, 3, Now(), Now()
    );

/* Criar as atividades para essa fase */
INSERT INTO atividade
    (
    cod_atividade, cod_informacao, cod_midia, num_sequencia, nom_atividade, cod_tipo_atividade, 
    dsc_texto_visual, dsc_texto_narrado, 
    cod_concessionaria, cod_usuario_criacao, dat_criacao, dat_atualizacao  
    )
VALUES
    ( 
    6, 1, 2, 6, 'Feedback fim', 'SINTVOZ', 
    'Feedback de encerramento', 'Narrando feedback de encerramento', 
    1, 3, Now(), Now()
    );


/* ---------------------------------------------------------------------- */
/* "rota - FASE 2"                                                        */
/* ---------------------------------------------------------------------- */

INSERT INTO rota
    ( cod_rota, cod_trajeto, nom_rota, ind_ativo, cod_concessionaria, cod_usuario_criacao, dat_criacao, dat_atualizacao )
VALUES 
    ( 1, 1, 'Nome da rota', 'S', 1, 3, Now(), Now() );


/* ---------------------------------------------------------------------- */
/* "ponto_rota"                                                           */
/* ---------------------------------------------------------------------- */

INSERT INTO ponto_rota
    (
    cod_ponto_rota, cod_rota, cod_midia, cod_tipo_midia, num_sequencia,
    nom_ponto_rota, dsc_texto_visual, dsc_texto_narrado,
    num_posicao_x, num_posicao_y, cod_concessionaria, cod_usuario_criacao, dat_criacao, dat_atualizacao )
VALUES
    (
    1, 1, 3, 'icone', 1,
    'rota 1 siga em frente', 'Passando em um GPS, icone siga em frente', 'Narrando passando em um GPS, icone siga em frente',
    -19.8233378986194, -43.9432075877996, 1, 3, Now(), Now()
    );

INSERT INTO ponto_rota
    (
    cod_ponto_rota, cod_rota, cod_midia, cod_tipo_midia, num_sequencia,
    nom_ponto_rota, dsc_texto_visual, dsc_texto_narrado,
    num_posicao_x, num_posicao_y, cod_concessionaria, cod_usuario_criacao, dat_criacao, dat_atualizacao )
VALUES
    (
    2, 1, 2, 'AUDIO', 2,
    'rota 2 continue', 'VOZ DO CHELIS INTRODUCAO', 'Narrando nova atividade gps, continue',
    -19.8250846919279, -43.9421638687632, 1, 3, Now(), Now()
    );

INSERT INTO ponto_rota
    (
    cod_ponto_rota, cod_rota, cod_midia, cod_tipo_midia, num_sequencia,
    nom_ponto_rota, dsc_texto_visual, dsc_texto_narrado,
    num_posicao_x, num_posicao_y, cod_concessionaria, cod_usuario_criacao, dat_criacao, dat_atualizacao )
VALUES
    (
    3, 1, 5, 'AUDIO', 3,
    'rota 2.1 continue', 'CHELIS TETO SOLAR - Vire a esquerda com icone', '',
    -19.827461056902, -43.9386481447167, 1, 3, Now(), Now()
    );

INSERT INTO ponto_rota
    (
    cod_ponto_rota, cod_rota, cod_midia, cod_tipo_midia, num_sequencia,
    nom_ponto_rota, dsc_texto_visual, dsc_texto_narrado,
    num_posicao_x, num_posicao_y, cod_concessionaria, cod_usuario_criacao, dat_criacao, dat_atualizacao )
VALUES
    (
    4, 1, 2, 'AUDIO', 4,
    'rota 2.2 continue', 'VOZ DO CHELIS VOLANTE', 'Atenção! Não pode ser lido pelo sintetizador!',
    -19.8284893157419, -43.9375656594473, 1, 3, Now(), Now()
    );

INSERT INTO ponto_rota
    (
    cod_ponto_rota, cod_rota, cod_midia, cod_tipo_midia, num_sequencia,
    nom_ponto_rota, dsc_texto_visual, dsc_texto_narrado,
    num_posicao_x, num_posicao_y, cod_concessionaria, cod_usuario_criacao, dat_criacao, dat_atualizacao )
VALUES
    (
    5, 1, 1, 'icone', 5,
    'rota 3 vire direita', 'GPS vire a direita', 'Narrando gps vire a direita',
    -19.8305259159, -43.9367256561508, 1, 3, Now(), Now()
    );

INSERT INTO ponto_rota
    (
    cod_ponto_rota, cod_rota, cod_midia, cod_tipo_midia, num_sequencia,
    nom_ponto_rota, dsc_texto_visual, dsc_texto_narrado,
    num_posicao_x, num_posicao_y, cod_concessionaria, cod_usuario_criacao, dat_criacao, dat_atualizacao )
VALUES
    (
    6, 1, 1, 'icone', 6,
    'rota 4 vire direita na rotatoria', 'GPS vire a direita rotatoria', 'Narrando gps vire a direita na rotatória',
    -19.8329918305923, -43.9362806850864, 1, 3, Now(), Now()
    );

INSERT INTO ponto_rota
    (
    cod_ponto_rota, cod_rota, cod_midia, cod_tipo_midia, num_sequencia,
    nom_ponto_rota, dsc_texto_visual, dsc_texto_narrado,
    num_posicao_x, num_posicao_y, cod_concessionaria, cod_usuario_criacao, dat_criacao, dat_atualizacao )
VALUES
    (
    7, 1, 2, 'VOZ', 7,
    'rota pos video', 'Sem icone. GPS depois de feedback com video', 'Sem ícone. Narrando gps depois de feedback com video',
    -19.8341224003072, -43.937725602124, 1, 3, Now(), Now()
    );

INSERT INTO ponto_rota
    (
    cod_ponto_rota, cod_rota, cod_midia, cod_tipo_midia, num_sequencia,
    nom_ponto_rota, dsc_texto_visual, dsc_texto_narrado,
    num_posicao_x, num_posicao_y, cod_concessionaria, cod_usuario_criacao, dat_criacao, dat_atualizacao )
VALUES
    (
    8, 1, 3, 'VOZ', 7,
    'rota pos video', 'Sem icone. GPS depois de feedback com video', 'Sem ícone. Narrando gps depois de feedback com video',
    -19.8341224003072, -43.937725602124, 1, 3, Now(), Now()
    );


/* ---------------------------------------------------------------------- */
/* "informacao" - FASE 3                                                  */
/* ---------------------------------------------------------------------- */

/* Criar a fase em questao */
INSERT INTO informacao
    ( cod_informacao, nom_informacao, dsc_informacao, ind_ativo, cod_concessionaria, cod_usuario_criacao, dat_criacao, dat_atualizacao )
VALUES
    ( 2, 'Info fase 3', 'Teste fase 3 do tipo info', 'S', 1, 3, Now(), Now());

/* Criar as atividades para essa fase */
INSERT INTO atividade
    (
    cod_atividade, cod_informacao, cod_midia, num_sequencia, nom_atividade, cod_tipo_atividade, 
    dsc_texto_visual, dsc_texto_narrado, 
    cod_concessionaria, cod_usuario_criacao, dat_criacao, dat_atualizacao  
    )
VALUES
    ( 
    7, 1, 2, 1, 'Feedback 1', 'SINTVOZ', 
    'atividade feedback inicial', 'Repetingdo narração da atividade feedback inicial', 
    1, 3, Now(), Now()
    );

INSERT INTO atividade
    (
    cod_atividade, cod_informacao, cod_midia, num_sequencia, nom_atividade, cod_tipo_atividade, 
    dsc_texto_visual, dsc_texto_narrado, 
    cod_concessionaria, cod_usuario_criacao, dat_criacao, dat_atualizacao  
    )
VALUES
    ( 
    8, 1, 1, 2, 'Feedback 2', 'SINTVOZ', 
    'Segunda atividade feedback', 'Repetindo narração da segunda atividade feedback',
    1, 3, Now(), Now()
    );

INSERT INTO atividade
    (
    cod_atividade, cod_informacao, cod_midia, num_sequencia, nom_atividade, cod_tipo_atividade, 
    dsc_texto_visual, dsc_texto_narrado, 
    cod_concessionaria, cod_usuario_criacao, dat_criacao, dat_atualizacao  
    )
VALUES
    ( 
    9, 1, 4, 3, 'Feedback pos imagem', 'SINTVOZ', 
    'Feedback depois de ter mostrado a imagem', 'Repetindo narração do feedback depois de ter mostrado a imagem',
    1, 3, Now(), Now()
    );

INSERT INTO atividade
    (
    cod_atividade, cod_informacao, cod_midia, num_sequencia, nom_atividade, cod_tipo_atividade, 
    dsc_texto_visual, dsc_texto_narrado, 
    cod_concessionaria, cod_usuario_criacao, dat_criacao, dat_atualizacao  
    )
VALUES
    (
    10, 1, 5, 4, 'Feedback video', 'SINTVOZ', 
    'Feedback com video', 'Repetindo narração do feedback com video',
    1, 3, Now(), Now()
    );

INSERT INTO atividade
    (
    cod_atividade, cod_informacao, cod_midia, num_sequencia, nom_atividade, cod_tipo_atividade, 
    dsc_texto_visual, dsc_texto_narrado, 
    cod_concessionaria, cod_usuario_criacao, dat_criacao, dat_atualizacao  
    )
VALUES
    (
    11, 1, 2, 5, 'Feedback fim', 'SINTVOZ', 
    'Feedback de encerramento', 'Repetindo narração do feedback de encerramento',
    1, 3, Now(), Now()
    );

    /* ---------------------------------------------------------------------- */
/* "experiencia"                                                          */
/* ---------------------------------------------------------------------- */

INSERT INTO experiencia
    ( cod_experiencia, nom_experiencia, cod_check_list, cod_fase_avancada, ind_ativo, cod_concessionaria, cod_usuario_criacao, dat_criacao, dat_atualizacao )
VALUES
    ( 2, 'Rota teste Marcos 2', 1, 6, 'S', 1, 3,  Now(), Now());

/* ---------------------------------------------------------------------- */
/* "fase_experiencia"                                                     */
/* ---------------------------------------------------------------------- */

INSERT INTO fase_experiencia
    ( cod_fase_experiencia, cod_experiencia, cod_fase, cod_tipo_fase, num_sequencia, cod_concessionaria, cod_usuario_criacao, dat_criacao, dat_atualizacao )
VALUES
    ( 5, 2, 1, 'INFO', 1, 1, 3,  Now(), Now());

INSERT INTO fase_experiencia
    ( cod_fase_experiencia, cod_experiencia, cod_fase, cod_tipo_fase, num_sequencia, cod_concessionaria, cod_usuario_criacao, dat_criacao, dat_atualizacao )
VALUES
    ( 6, 2, 1, 'ROTA', 2, 1, 3,  Now(), Now());

INSERT INTO fase_experiencia
    ( cod_fase_experiencia, cod_experiencia, cod_fase, cod_tipo_fase, num_sequencia, cod_concessionaria, cod_usuario_criacao, dat_criacao, dat_atualizacao )
VALUES
    ( 7, 2, 1, 'INFO', 3, 1, 3,  Now(), Now());

INSERT INTO fase_experiencia
    ( cod_fase_experiencia, cod_experiencia, cod_fase, cod_tipo_fase, num_sequencia, cod_concessionaria, cod_usuario_criacao, dat_criacao, dat_atualizacao )
VALUES
    ( 8, 2, 1, 'AVAL', 4, 1, 3,  Now(), Now());


/* ---------------------------------------------------------------------- */
/* "experiencia"                                                          */
/* ---------------------------------------------------------------------- */

INSERT INTO experiencia
    ( cod_experiencia, nom_experiencia, cod_check_list, cod_fase_avancada, ind_ativo, cod_concessionaria, cod_usuario_criacao, dat_criacao, dat_atualizacao )
VALUES
    ( 3, 'Rota teste Marcos 3', 1, 6, 'S', 1, 3,  Now(), Now());

/* ---------------------------------------------------------------------- */
/* "fase_experiencia"                                                     */
/* ---------------------------------------------------------------------- */

INSERT INTO fase_experiencia
    ( cod_fase_experiencia, cod_experiencia, cod_fase, cod_tipo_fase, num_sequencia, cod_concessionaria, cod_usuario_criacao, dat_criacao, dat_atualizacao )
VALUES
    ( 9, 3, 1, 'INFO', 1, 1, 3,  Now(), Now());

INSERT INTO fase_experiencia
    ( cod_fase_experiencia, cod_experiencia, cod_fase, cod_tipo_fase, num_sequencia, cod_concessionaria, cod_usuario_criacao, dat_criacao, dat_atualizacao)
VALUES
    ( 10, 3, 1, 'ROTA', 2, 1, 3,  Now(), Now());

INSERT INTO fase_experiencia
    ( cod_fase_experiencia, cod_experiencia, cod_fase, cod_tipo_fase, num_sequencia, cod_concessionaria, cod_usuario_criacao, dat_criacao, dat_atualizacao)
VALUES
    ( 11, 3, 1, 'INFO', 3, 1, 3,  Now(), Now());



COMMIT;
