let dados = [
    {
        titulo: "Jujutsu Kaisen",
        descricao: "Jujutsu Kaisen é um anime shounen que nos transporta para um mundo onde criaturas sobrenaturais, chamadas Maldições, nascem das emoções negativas humanas. A história gira em torno de Yuji Itadori, um estudante do ensino médio que se vê envolvido em um conflito sobrenatural ao ingerir um dedo amaldiçoado, transformando-se no recipiente de uma poderosa Maldição.",
        link: "https://pt.wikipedia.org/wiki/Jujutsu_Kaisen",
        acesso: "https://www.crunchyroll.com/pt-br/series/GRDV0019R/jujutsu-kaisen?srsltid=AfmBOorZWi9esF3qK3HBxa9s5sebqF4mUTg1qcU_gI1pKOx4qCN4XeWX",
        tags: "maldição dedos adolescente comer"
    },
    {
        titulo: "Solo Leveling",
        descricao: "Em um mundo onde caçadores enfrentam monstros em portais para outros mundos, Sung Jin-woo se destaca ao sobreviver a uma caçada extremamente perigosa. Com habilidades sobrehumanas, ele se torna o caçador mais forte do mundo, embarcando em aventuras cada vez mais desafiadoras.",
        link: "https://pt.wikipedia.org/wiki/Solo_Leveling",
        acesso: "https://www.crunchyroll.com/pt-br/series/GDKHZEJ0K/solo-leveling?srsltid=AfmBOopa8jY8eYGujIFqMGlI2JqjWYZ-JPmJx66kj7ppCcNLU0ZS1mVG",
        tags: "rpg simulação jogo caçador portal coreano novel"
    },
    {
        titulo: "Kimetsu no Yaiba",
        descricao: "Em um Japão feudal repleto de demônios, Tanjiro Kamado se torna um caçador de demônios após sua família ser massacrada e sua irmã transformada em um demônio. Com uma espada especial, ele busca uma cura para sua irmã e vingança pelos seus entes queridos.",
        link: "https://pt.wikipedia.org/wiki/Kimetsu_no_Yaiba",
        acesso: "https://www.crunchyroll.com/pt-br/series/GRDV0023R/demon-slayer-kimetsu-no-yaiba",
        tags: "demônios caçador irmã espada lua"
    },
    {
        titulo: "Kaiju nº 8",
        descricao: "Em um mundo onde monstros gigantes, os Kaijus, atacam regularmente, Kafka Hibino sonha em se tornar um membro da Divisão de Defesa contra Kaijus. Após uma transformação inesperada, ele se torna um Kaiju humanoide e entra para a organização que antes o rejeitou.",
        link: "https://pt.wikipedia.org/wiki/Kaiju_nº_8",
        acesso: "https://www.crunchyroll.com/pt-br/series/GG5H5XQ7D/kaiju-no-8?srsltid=AfmBOorqoM9QDGvE5Ka6cfGcxJ3uklOfrO-31u3nlKsP2rdhFgRmiz4Z",
        tags: "monstros adulto kaiju transformação"
    },
    {
        titulo: "Naruto",
        descricao: "Naruto Uzumaki é um jovem ninja que busca reconhecimento e sonha em se tornar o Hokage, o líder da sua vila. Ao longo de sua jornada, ele faz amigos, enfrenta inimigos poderosos e descobre os segredos do seu passado.",
        link: "https://pt.wikipedia.org/wiki/Naruto",
        acesso: "https://www.crunchyroll.com/pt-br/series/GRDV00001/naruto",
        tags: "raposa vila amizade órfão ninja"
    },
    {
        titulo: "Dragon Ball",
        descricao: "Goku, um jovem saiyan com uma força incrível, embarca em aventuras para coletar as Esferas do Dragão, artefatos que podem realizar qualquer desejo. Ao longo de sua jornada, ele enfrenta diversos inimigos poderosos e protege a Terra de ameaças cósmicas.",
        link: "https://pt.wikipedia.org/wiki/Dragon_Ball",
        acesso: "https://www.crunchyroll.com/pt-br/series/GRDV00002/dragon-ball",
        tags: "esferas luta torneio lutas saiyajin"
    },
    {
        titulo: "Fullmetal Alchemist: Brotherhood",
        descricao: "Os irmãos Edward e Alphonse Elric tentam trazer sua mãe de volta à vida através da alquimia, mas pagam um preço alto por sua imprudência. Em busca de uma forma de recuperar seus corpos, eles embarcam em uma jornada perigosa para encontrar a Pedra Filosofal.",
        link: "https://pt.wikipedia.org/wiki/Fullmetal_Alchemist:_Brotherhood",
        acesso: "https://www.crunchyroll.com/pt-br/series/GRDV00020/fullmetal-alchemist-brotherhood",
        tags: "corpo alquimia medieval morte luto"
    },
    {
        titulo: "Attack on Titan",
        descricao: "Em um mundo onde gigantes humanoides, os Titãs, devoram humanos, Eren Yeager jura exterminá-los após a morte de sua mãe. Juntamente com seus amigos, ele se junta ao Exército para treinar e lutar contra os Titãs.",
        link: "https://pt.wikipedia.org/wiki/Shingeki_no_Kyojin",
        acesso: "https://www.crunchyroll.com/pt-br/series/GR751KNZY/attack-on-titan?srsltid=AfmBOoqM4aPVpO4a2LWhW9453JPkpO3UuB4lg_2AHafEXDYatSvvyIOE",
        tags: "titãs gigante ação sobrevivência mistério shingeki kyojin"
    },
    {
        titulo: "One Piece",
        descricao: "Luffy, um jovem pirata com o sonho de se tornar o Rei dos Piratas, embarca em uma grande aventura em busca do tesouro One Piece. Ao longo de sua jornada, ele reúne uma tripulação e enfrenta diversos desafios.",
        link: "https://pt.wikipedia.org/wiki/One_Piece",
        acesso: "https://www.crunchyroll.com/pt-br/series/GRMG8ZQZR/one-piece?srsltid=AfmBOopGKHfFcSQeVOJWUl_tiy3Ueea4UFy1FeiOX3WVgwbWMms2R9tm",
        tags: "piratas aventura comédia ação shounen"
    },
    {
        titulo: "Os Cavaleiros do Zodíaco",
        descricao: "Cinco jovens guerreiros, os Cavaleiros de Bronze, são escolhidos para proteger a reencarnação da deusa Atena em suas batalhas contra forças do mal.",
        link: "https://pt.wikipedia.org/wiki/Os_Cavaleiros_do_Zodíaco",
        acesso: "https://www.crunchyroll.com/pt-br/series/GRJQVJNXY/saint-seiya?srsltid=AfmBOoq-2Af4eIt9vda4Iu7iER37aG6CHCFj8YauSzhgMAu-rc8oAqtU",
        tags: "mitologia shounen ação fantasia"
    },
    {
        titulo: "Bleach",
        descricao: "Ichigo Kurosaki, um adolescente que pode ver espíritos, se torna um Shinigami substituto e luta contra Hollows, espíritos malignos que devoram almas humanas.",
        link: "https://pt.wikipedia.org/wiki/Bleach_(mangá)",
        acesso: "https://www.crunchyroll.com/pt-br/series/G63VGG2NY/bleach?srsltid=AfmBOopoI6AWunSq4pJgyxxPKfecpzyPKW4UluAW3Muos-Nvb_eQ1g0l",
        tags: "shinigami espiritos ação sobrenatural"
    },
    {
        titulo: "Yu Yu Hakusho",
        descricao: "Yusuke Urameshi, um delinquente adolescente, morre e é enviado para uma dimensão espiritual. Após provar seu valor, ele retorna à vida com a missão de proteger o mundo humano.",
        link: "https://pt.wikipedia.org/wiki/Yu_Yu_Hakusho",
        acesso: "https://www.crunchyroll.com/pt-br/series/GR9PKENW6/yu-yu-hakusho?srsltid=AfmBOoqo2EKBEtPTnT98qYJdQvHF7ncNsKx6iEwqSRaxHNuealnEDkut",
        tags: "shounen ação sobrenatural demônios"
    },
    {
        titulo: "Haikyu!!",
        descricao: "Shoyo Hinata, um garoto baixo, se apaixona pelo vôlei após assistir um jogo de um jogador talentoso. Ele entra para o clube de vôlei da escola e busca se tornar um jogador de destaque.",
        link: "https://pt.wikipedia.org/wiki/Haikyu!!",
        acesso: "https://www.crunchyroll.com/pt-br/series/GY8VM8MWY/haikyu?srsltid=AfmBOoo44qT9WMDdrou1_ulrBhNHDidw-tJt4tZF9R7Ve_cyLeU1_1fb",
        tags: "esportes vôlei amizade superação"
    }
];

