import { Movie } from "@/model/movie";

const mockPopularMovies = {
  page: 1,
  results: [
    {
      id: 653346,
      title: "Kingdom of the Planet of the Apes",
      genres: [
        { id: 28, name: "Action" },
        { id: 12, name: "Adventure" },
        { id: 878, name: "Science Fiction" }
      ],
      overview: "Várias gerações no futuro, após o reinado de César, os macacos são agora a espécie dominante e vivem harmoniosamente, enquanto os humanos foram reduzidos a viver nas sombras. À medida que um novo líder símio tirânico constrói o seu império, um jovem macaco empreende uma jornada angustiante que o levará a questionar tudo o que sabia sobre o passado e a fazer escolhas que definirão um futuro tanto para os macacos como para os humanos.",
      poster_path: "/dzDK2TMXsxrolGVdZwNGcOlZqrF.jpg",
      backdrop_path: "/fqv8v6AycXKsivp1T5yKtLbGXce.jpg",
      release_date: "2024-05-09",
      adult: false
    },
    {
      id: 573435,
      title: "Bad Boys: Ride or Die",
      genres: [
        { id: 28, name: "Action" },
        { id: 35, name: "Comedy" }
      ],
      overview: "Os Bad Boys preferidos do mundo todo estão de volta com a mistura icônica de ação eletrizante e comédia escrachada, mas, dessa vez, com uma virada: os melhores de Miami são agora os mais procurados.",
      poster_path: "/ak6VZDHms5T4p0eFISk336kqjR6.jpg",
      backdrop_path: "/ga4OLm4qLxPqKLMzjJlqHxVjst3.jpg",
      release_date: "2024-06-05",
      adult: false
    },
    {
      id: 929590,
      title: "Civil War",
      genres: [
        { id: 28, name: "Action" },
        { id: 18, name: "Drama" }
      ],
      overview: "Em um futuro não tão distante, quando uma guerra civil se instaura nos Estados Unidos, uma equipe pioneira de jornalistas de guerra viaja pelo país para registrar a dimensão e a situação de um cenário violento que tomou as ruas em uma rápida escalada, envolvendo toda a nação. No entanto, o trabalho de registro se transforma em uma guerra de sobrevivência quando eles também se tornam o alvo.",
      poster_path: "/3Use5sOQWXL3BvcaKqUH7eQ7I53.jpg",
      backdrop_path: "/z121dSTR7PY9KxKuvwiIFSYW8cf.jpg",
      release_date: "2024-04-18",
      adult: false
    },
    {
      id: 823464,
      title: "Godzilla x Kong: The New Empire",
      genres: [
        { id: 28, name: "Action" },
        { id: 878, name: "Science Fiction" }
      ],
      overview: "O poderoso Kong e o temível Godzilla se unem contra uma colossal ameaça mortal escondida no mundo dos humanos, que ameaça a existência de sua espécie e da nossa. Mergulhando profundamente nos mistérios da Ilha da Caveira e nas origens da Terra Oca, o filme irá explorar a antiga batalha de Titãs que ajudou a forjar esses seres extraordinários e os ligou à humanidade para sempre.",
      poster_path: "/kO6K9zEsKhNyqcrdGTSqAI6jrie.jpg",
      backdrop_path: "/xRd1eJIDe7JHO5u4gtEYwGn5wtf.jpg",
      release_date: "2024-03-28",
      adult: false
    },
    {
      id: 719221,
      title: "Tarot",
      genres: [
        { id: 27, name: "Horror" },
        { id: 53, name: "Thriller" }
      ],
      overview: "Quando um grupo de amigos irresponsavelmente viola a regra sagrada da leitura de tarô, a de nunca usar o deque de outra pessoa, eles libertam um mal inominável que estava preso nas cartas. Um por um, eles encaram seu destino e acabam em uma corrida contra a morte para escapar do futuro previsto para eles nas cartas.",
      poster_path: "/fGamTFPbJAAUnC2fbJbApTgi9EE.jpg",
      backdrop_path: "/oavbmL3iddJUmC8nQjL6bLHwAP4.jpg",
      release_date: "2024-05-01",
      adult: false
    },
    {
      id: 614933,
      title: "Atlas",
      genres: [
        { id: 28, name: "Action" },
        { id: 878, name: "Science Fiction" }
      ],
      overview: "Uma brilhante analista em contraterrorismo não confia em inteligência artificial, mas precisa usá-la quando a missão para capturar um robô rebelde dá errado.",
      poster_path: "/bcM2Tl5HlsvPBnL8DKP9Ie6vU4r.jpg",
      backdrop_path: "/3TNSoa0UHGEzEz5ndXGjJVKo8RJ.jpg",
      release_date: "2024-05-24",
      adult: false
    },
    {
      id: 746036,
      title: "The Fall Guy",
      genres: [
        { id: 28, name: "Action" },
        { id: 35, name: "Comedy" }
      ],
      overview: "Colt é um dublê que tem uma tremenda queda pela diretora do filme que está filmando. As coisas começam a dar errado quando o ator principal do filme desaparece.",
      poster_path: "/7AkiDy6DVlfhJusglf6tvifX6dB.jpg",
      backdrop_path: "/H5HjE7Xb9N09rbWn1zBfxgI8uz.jpg",
      release_date: "2024-05-01",
      adult: false
    },
    {
      id: 1022789,
      title: "Inside Out 2",
      genres: [
        { id: 16, name: "Animation" },
        { id: 35, name: "Comedy" },
        { id: 10751, name: "Family" }
      ],
      overview: "Divertida Mente 2, da Disney e Pixar, volta a entrar na mente da agora adolescente Riley, no momento em que a Sala de Comando passa por uma repentina demolição para dar lugar a algo totalmente inesperado: novas Emoções. Alegria, Tristeza, Raiva, Medo e Nojinho, que há muito tempo comandam uma operação de sucesso, não sabem ao certo como se sentem quando a Ansiedade, a Inveja, o Tédio e a Vergonha chegam.",
      poster_path: "/9h2KgGXSmWigNTn3kQdEFFngj9i.jpg",
      backdrop_path: "/uVu2fBc114un7F1GD76RBouWyBP.jpg",
      release_date: "2024-06-13",
      adult: false
    },
    {
      id: 437342,
      title: "The First Omen",
      genres: [
        { id: 27, name: "Horror" },
        { id: 53, name: "Thriller" }
      ],
      overview: "Uma mulher começa a questionar a sua própria fé quando descobre uma terrível conspiração para provocar o nascimento do mal encarnado em Roma.",
      poster_path: "/tINXSJfPiVGrTZTHFz5TFDh6SeX.jpg",
      backdrop_path: "/tkHQ7tnYYUEnqlrKuhufIsSVToU.jpg",
      release_date: "2024-04-04",
      adult: false
    },
    {
      id: 1136318,
      title: "Battle Over Britain",
      genres: [
        { id: 28, name: "Action" },
        { id: 18, name: "Drama" }
      ],
      overview: "Um jovem piloto é chamado para defender o espaço aéreo da Grã-Bretanha contra o ataque da Alemanha nazista. Sem a menor possiblidade de se render, ele lutará pela honra de seus companheiros e pelo futuro da nação.",
      poster_path: "/8aRl9fIIjCiOc7dREwcXSEmKbQS.jpg",
      backdrop_path: "/11G6N5zW0KykVS0EcNKeXHUmQj8.jpg",
      release_date: "2023-12-01",
      adult: false
    },
    {
      id: 882059,
      title: "Boy Kills World",
      genres: [
        { id: 28, name: "Action" },
        { id: 878, name: "Science Fiction" }
      ],
      overview: "Um jovem com surdez e mudo é treinado como um assassino em uma terra distópica e repleta de mistérios e ameaças, onde a justiça se impõe pela força.",
      poster_path: "/htlJToO8ecg7gWWUttwhFXqGLNP.jpg",
      backdrop_path: "/1NG3dAlXHWC8Zlk57Ipa0bSjoRh.jpg",
      release_date: "2024-04-04",
      adult: false
    },
    {
      id: 393516,
      title: "The Boogeyman",
      genres: [
        { id: 27, name: "Horror" },
        { id: 53, name: "Thriller" }
      ],
      overview: "Uma jovem garota descobre um livro sobre monstros debaixo de sua cama. Mas não são apenas histórias de terror: ela despertou um pesadelo que começa a assombrar sua vida e a de sua família.",
      poster_path: "/dHp8xSc2CTe7U6HDfjw7upRxN2a.jpg",
      backdrop_path: "/pPpkskucTskdl1mC8rjsP6DbMBk.jpg",
      release_date: "2024-04-11",
      adult: false
    }
  ] as Movie[]
};

export default mockPopularMovies;

