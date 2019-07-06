(function(e){function o(o){for(var a,s,i=o[0],l=o[1],u=o[2],d=0,m=[];d<i.length;d++)s=i[d],r[s]&&m.push(r[s][0]),r[s]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);c&&c(o);while(m.length)m.shift()();return n.push.apply(n,u||[]),t()}function t(){for(var e,o=0;o<n.length;o++){for(var t=n[o],a=!0,i=1;i<t.length;i++){var l=t[i];0!==r[l]&&(a=!1)}a&&(n.splice(o--,1),e=s(s.s=t[0]))}return e}var a={},r={app:0},n=[];function s(o){if(a[o])return a[o].exports;var t=a[o]={i:o,l:!1,exports:{}};return e[o].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.m=e,s.c=a,s.d=function(e,o,t){s.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:t})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,o){if(1&o&&(e=s(e)),8&o)return e;if(4&o&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(s.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var a in e)s.d(t,a,function(o){return e[o]}.bind(null,a));return t},s.n=function(e){var o=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(o,"a",o),o},s.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=o,i=i.slice();for(var u=0;u<i.length;u++)o(i[u]);var c=l;n.push([0,"chunk-vendors"]),t()})({0:function(e,o,t){e.exports=t("56d7")},"034f":function(e,o,t){"use strict";var a=t("64a9"),r=t.n(a);r.a},"56d7":function(e,o,t){"use strict";t.r(o);t("cadf"),t("551c"),t("f751"),t("097d");var a=t("2b0e"),r=t("8c4f"),n=t("2f62"),s=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},i=[],l={name:"app"},u=l,c=(t("034f"),t("2877")),d=Object(c["a"])(u,s,i,!1,null,null,null),m=d.exports,p=(t("ac6a"),t("5df3"),t("96cf"),t("3b8d")),v=t("bc3a"),f=t.n(v),_=f.a.create({baseURL:"/json",withCredentials:!1,headers:{Accept:"application/json","Content-Type":"application/json"}}),b=function(){return _.get("index.json")},g=function(e){return _.get(e)},h={getIndex:b,readFile:g},j=function(){return new n["a"].Store({state:{index:{},book:[]},mutations:{setIndex:function(e,o){e.index=o},setBook:function(e,o){e.book=o}},actions:{updateIndex:function(e){var o=e.commit;h.getIndex().then(function(){var e=Object(p["a"])(regeneratorRuntime.mark(function e(o){var t,a,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=o.data,a=t.locations.map(function(){var e=Object(p["a"])(regeneratorRuntime.mark(function e(o){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,h.readFile(o);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}},e)}));return function(o){return e.apply(this,arguments)}}()),e.next=4,Promise.all(a);case 4:return r=e.sent,e.abrupt("return",r);case 6:case"end":return e.stop()}},e)}));return function(o){return e.apply(this,arguments)}}()).then(function(e){return e.reduce(function(e,o){var t=o.tag,a=o.content;if("document"!==t)throw console.error("Not a document. Failing"),"Not a document";var r={name:(a[0].content?a[0].content[0].content[0]:"").trim()};return console.log(e,a,r),e.push(r),e},[])}).then(function(e){console.log("commit",e),o("setBook",e)})}}})},C=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",[t("BigHeader"),t("HomeContent"),t("BigFooter")],1)},x=[],q=function(){var e=this,o=e.$createElement;e._self._c;return e._m(0)},y=[function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{staticClass:"jumbotron jumbotron-fluid bg-secondary text-light"},[t("div",{staticClass:"container"},[t("h4",[e._v("O autor")]),t("p",{staticClass:"lead"},[e._v("Plínio Balduino ")]),t("p",[e._v("Plínio Balduino desenvolve softwares para diversas plataformas há quase vinte anos, tenta tocar baixo decentemente há dez, é casado com Roberta e pai de Gustavo, Mariana e Duda. É autor do livro Dominando JavaScript com jQuery, publicado pela Editora Casa do Código.")]),t("p",[e._v("É também mantenedor dos sites ClojureDocs BR, e Clojure Brasil, além de ser um dos organizadores do (clj-sp), o grupo de usuários Clojure de São Paulo e Rio de Janeiro, administrador da lista de discussão ClojureBrasil e membro ativo da lista oficial do Clojure e da lista Clojure Portugal.")]),t("p",[e._v("No último capítulo há uma lista com os links dos sites citados aqui e mais alguns muito interessantes para o desenvolvedor Clojure.")]),t("hr"),t("h5",[e._v("Licenças e direitos autorais")]),t("p",[t("small",[e._v("Os direitos autorais deste site e de seu conteúdo pertencem a Plínio Balduino, exceto onde seja informado o contrário. Você pode compartilhar, copiar e citar o conteúdo aqui presente, desde que informando a fonte. Você não pode utilizar o conteúdo aqui presente como se fosse o autor. Ao utilizar este site e seu conteúdo, você está automaticamente concordando com estes termos.")])]),t("p",[t("small",[e._v("Os direitos autorais do Clojure, o nome Clojure e qualquer recurso relacionado pertencem a Rich Hickey e/ou seus respectivos autores, exceto onde informado o contrário.")])]),t("p",[t("small",[e._v("Os direitos autorais sobre o logotipo do Clojure pertencem a Tom Hickey.")])])])])}],E={name:"BigFooter"},O=E,P=Object(c["a"])(O,q,y,!1,null,null,null),k=P.exports,w=function(){var e=this,o=e.$createElement;e._self._c;return e._m(0)},$=[function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{staticClass:"jumbotron jumbotron-fluid bg-primary text-light"},[t("div",{staticClass:"container"},[t("h1",{staticClass:"display-4"},[t("img",{staticClass:"d-none d-md-inline",attrs:{src:"https://clojure.org/images/clojure-logo-120b.png"}}),e._v("\n      Descobrindo Clojure\n    ")]),t("h2",[e._v("Programação funcional descomplicada para a JVM")])])])}],z={name:"BigHeader"},L=z,H=Object(c["a"])(L,w,$,!1,null,null,null),B=H.exports,F=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{staticClass:"container"},[e._m(0),t("div",{staticClass:"row"},[t("Index"),e._m(1)],1)])},S=[function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{staticClass:"row"},[t("div",{staticClass:"col-sm text-clojure-dark-blue"},[t("p",{staticClass:"text-justify"},[e._v("\n        Você sempre quis aprender Clojure mas, por qualquer motivo, prefere um material em Português? E se, além de estar no seu idioma preferido, ele ainda for tão bom quanto os melhores livros em Inglês e o mais completo em Português?\n      ")]),t("p",{staticClass:"text-justify"},[e._v("\n        Seria excelente, não?\n      ")]),t("p",{staticClass:"text-justify"},[e._v("\n        Depois de mais tempo do que eu gostaria, estou disponibilizando o conteúdo do meu livro gratuitamente e online para que você possa entender, aprender e se tornar um programador Clojure. Ou simplesmente se tornar um melhor programador em qualquer linguagem que você prefira usar, apenas por ter aprendido práticas de programação funcional.\n      ")]),t("p",{staticClass:"text-justify"},[e._v("\n        Caso você prefira ler no conforto do seu leitor de e-books, em breve vou disponibilizar o conteúdo neste formato. Ou, caso você prefira o bom e velho livro em papel, também em breve você poderá adquirí-lo através da Amazon.\n      ")])])])},function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{staticClass:"col-sm-3 text-clojure-dark-blue"},[t("h3",[e._v("Quero o livro")]),t("p",[t("img",{staticClass:"img-fluid img-cover",attrs:{src:"img/cover.png"}})]),t("p",[e._v("\n        Quer comprar ou baixar? Aguarde.\n        ")])])}],D=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{staticClass:"col-sm mr-1 text-clojure-dark-blue"},[t("a",{attrs:{name:"toc"}}),t("h3",[e._v("Quero ler online")]),t("ol",[t("li",[t("router-link",{attrs:{to:"/online"}},[e._v("Sobre a versão online")])],1),t("li",[e._v("Introdução")]),t("ul",[t("li",[t("router-link",{attrs:{to:"/dedication"}},[e._v("Dedicatória")])],1),t("li",[t("router-link",{attrs:{to:"/foreword"}},[e._v("Prefácio")])],1),t("li",[e._v("Agradecimentos")]),t("li",[e._v("Sobre o autor")]),t("li",[e._v("Aviso")])]),t("li",[e._v("Apresentação")]),e._m(0),t("li",[e._v("Uma introdução gentil ao Clojure")]),e._m(1),t("li",[e._v("O REPL é tão importante...")]),e._m(2),t("li",[e._v("Descobrindo o poder das funções")]),t("li",[e._v("Dados e metadados")]),t("li",[e._v("Namespaces para organizar o código")]),t("li",[e._v("Calculando o infinito com lazy sequences")]),t("li",[e._v("Integrando Clojure com Java")]),t("li",[e._v("Concorrência e multithreading")]),t("li",[e._v("Estendendo a linguagem com macros")]),t("li",[e._v("Dicas para um bom desenvolvimento em Clojure")]),t("li",[e._v("Onde aprender mais")])]),e._v("\nE vem muito mais por aí\n")])},R=[function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("ul",[t("li",[e._v("Por que Clojure?")]),t("li",[e._v("Para quem é esse livro")]),t("li",[e._v("Como o livro está organizado")]),t("li",[e._v("Lista de discussão e código fonte")])])},function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("ul",[t("li",[e._v("O que é Clojure?")]),t("li",[e._v("Configurando o ambiente")]),t("li",[e._v("Explicando a sintaxe")]),t("li",[e._v("Explicando os parênteses")])])},function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("ul",[t("li",[e._v("...que merece um capítulo a parte")]),t("li",[e._v("Alguns truques rápidos com o REPL")]),t("li",[e._v("Desenvolvimento baseado no REPL")]),t("li",[e._v("Criando uma aplicação de exemplo")]),t("li",[e._v("Modificando a aplicação através do REPL")])])}],A={name:"Index"},I=A,M=Object(c["a"])(I,D,R,!1,null,null,null),N=M.exports,V={name:"HomeContent",components:{Index:N}},J=V,T=Object(c["a"])(J,F,S,!1,null,null,null),Q=T.exports,U={name:"Home",components:{BigFooter:k,BigHeader:B,HomeContent:Q}},G=U,K=Object(c["a"])(G,C,x,!1,null,null,null),W=K.exports,X=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",[t("LittleHeader"),e.$store.book&&e.$store.book.chapter[e.$route.params.chapter]?t("div",{staticClass:"container"},[t("div",{staticClass:"row"},[t("h1",[e._v(e._s(e.$route.params.chapter))])]),t("div",{staticClass:"row"},[e._v("\n      "+e._s(e.store.book.chapter[e.$route.params.chapter])+"\n    ")])]):t("div",{staticClass:"container"},[t("NotFound")],1),t("LittleFooter")],1)},Y=[],Z=function(){var e=this,o=e.$createElement;e._self._c;return e._m(0)},ee=[function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{staticClass:"jumbotron jumbotron-fluid bg-secondary text-light"},[t("div",{staticClass:"container"},[t("p",{staticClass:"text-justify"},[t("small",[e._v("Os direitos autorais deste site e de seu conteúdo pertencem a Plínio Balduino, exceto onde seja informado o contrário. Você pode compartilhar, copiar e citar o conteúdo aqui presente, desde que informando a fonte. Você não pode utilizar o conteúdo aqui presente como se fosse o autor. Ao utilizar este site e seu conteúdo, você está automaticamente concordando com estes termos.")])]),t("p",{staticClass:"text-justify"},[t("small",[e._v("Os direitos autorais do Clojure, o nome Clojure e qualquer recurso relacionado pertencem a Rich Hickey e/ou seus respectivos autores, exceto onde informado o contrário.")])]),t("p",{staticClass:"text-justify"},[t("small",[e._v("Os direitos autorais sobre o logotipo do Clojure pertencem a Tom Hickey.")])])])])}],oe={name:"LittleFooter"},te=oe,ae=Object(c["a"])(te,Z,ee,!1,null,null,null),re=ae.exports,ne=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{staticClass:"jumbotron jumbotron-fluid bg-primary text-light"},[t("div",{staticClass:"container"},[t("h1",{staticClass:"display-4 text-light"},[t("router-link",{attrs:{to:"/"}},[t("img",{staticClass:"d-none d-md-inline",attrs:{src:"https://clojure.org/images/clojure-logo-120b.png"}}),e._v("\n        Descobrindo Clojure\n      ")])],1)])])},se=[],ie={name:"LittleHeader"},le=ie,ue=Object(c["a"])(le,ne,se,!1,null,null,null),ce=ue.exports,de=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("pre",[e._v("user=> ("+e._s(e.$route.params.chapter)+"/read)\nSyntax error compiling at (REPL:1:1).\nNo such namespace: "+e._s(e.$route.params.chapter)+"\n\n; 404 - A página que você procura não existe ou mudou de lugar\n; "),t("router-link",{attrs:{to:"/"}},[e._v("Clique aqui")]),e._v(" para voltar à página inicial")],1)},me=[],pe={name:"NotFound"},ve=pe,fe=Object(c["a"])(ve,de,me,!1,null,null,null),_e=fe.exports,be={name:"Reader",components:{LittleFooter:re,LittleHeader:ce,NotFound:_e}},ge=be,he=Object(c["a"])(ge,X,Y,!1,null,null,null),je=he.exports,Ce=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",[t("LittleHeader"),e._m(0),t("LittleFooter")],1)},xe=[function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{staticClass:"container"},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-sm text-clojure-dark-blue"},[t("h1",[e._v("Sobre a versão online")]),t("p",{staticClass:"text-justify"},[e._v("\n        Quando comecei a escrever este livro há alguns anos, havia uma total\n        falta de material em Português, com exceção de alguns posts em blogs\n        técnicos e algumas poucas palestras. O autor do prefácio, Paulo Suzart,\n        foi pioneiro ao escrever sobre Clojure e eu o acompanhei algum tempo depois.\n        Isso foi em 2008 e pouca coisa aconteceu nesse sentido desde então.\n        ")]),t("p",{staticClass:"text-justify"},[e._v("\n        Hoje, felizmente, o cenário está um pouco melhor. Temos um livro publicado\n        em Português tratando da linguagem que satisfaz os iniciantes e os traz\n        para mais perto, sem que tenham que depender da documentação padrão da\n        linguagem, que é longe de ser amigável.\n        ")]),t("p",{staticClass:"text-justify"},[e._v("\n        Por falha única e exclusivamente minha, por uma série de motivos alheios\n        a este foro, este acabou não sendo o tal livro pioneiro. De qualquer\n        maneira havia aqui conteúdo o bastante, já testado e amadurecido, e seria\n        um grande desperdício deixá-lo guardado. Estas últimas são, inclusive,\n        palavras dos revisores e dos primeiros leitores da obra, que tiveram\n        acesso a ela muito antes de qualquer publicação ser feita.\n        ")]),t("p",{staticClass:"text-justify"},[e._v("\n        Finalmente, o resultado de tantos anos de trabalho e espera está sendo\n        disponibilizado a você, gratuitamente, gradualmente e online. Conforme\n        o último trecho for publicado, disponibilizarei também a opção de adquirir\n        a versão em papel. Seria uma forma de me ajudar e também de satisfazer\n        aqueles que preferem um livro físico para ler e fazer anotações. Estou\n        considerando a publicação em ebook também, mas talvez seja redundante.\n        Vamos ver como vai ser.\n        ")]),t("p",{staticClass:"text-justify"},[e._v("\n        Desde já agradeço seu interesse, espero realmente que o conteúdo do livro\n        atenda às suas expectativas e necessidades e fique à vontade para oferecer\n        sua opinião, indicação de erros ou mesmo sugestões de melhoria.\n        ")]),t("p",{staticClass:"text-justify"},[e._v("\n        Para sugestões ou correções, utilize o sistema de "),t("i",[e._v("issues")]),e._v(" em "),t("a",{attrs:{href:"https://github.com/pbalduino/descobrindoclojure"}},[e._v("https://github.com/pbalduino/descobrindoclojure")])]),t("p",{staticClass:"text-justify"},[e._v("\n        Aproveite.\n        ")])])])])}],qe={name:"OnlineVersion",components:{LittleHeader:ce,LittleFooter:re}},ye=qe,Ee=Object(c["a"])(ye,Ce,xe,!1,null,null,null),Oe=Ee.exports,Pe=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",[t("LittleHeader"),e._m(0),t("LittleFooter")],1)},ke=[function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{staticClass:"container"},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-sm text-clojure-dark-blue"},[t("h1",[e._v("Dedicatória")]),t("blockquote",{staticClass:"blockquote"},[t("p",{staticClass:"mb-0"},[e._v('\n            "Aos meus filhos: Gu, Duda e Mari.'),t("br"),e._v('\n            Meu esforço é sempre por vocês."\n          ')]),t("footer",{staticClass:"blockquote-footer"},[e._v("Plínio Balduino")])])])])])}],we={name:"Dedication",components:{LittleHeader:ce,LittleFooter:re}},$e=we,ze=Object(c["a"])($e,Pe,ke,!1,null,null,null),Le=ze.exports,He=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",[t("LittleHeader"),e._m(0),t("LittleFooter")],1)},Be=[function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{staticClass:"container"},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-sm text-clojure-dark-blue"},[t("h1",[e._v("Prefácio")]),t("p",{staticClass:"text-justify"},[e._v("\n        Plínio vem em boa hora trazer luz ao mundo LISP no Brasil. Ele queria\n        ter encontrado tamanha sutileza na introdução a Clojure como esta que\n        você tem em suas mãos. Confesso que eu também.\n        ")]),t("p",{staticClass:"text-justify"},[e._v("\n        Tempos difíceis lá em 2009, quando os forasteiros da programação funcional\n        e do LISP na JVM contavam apenas com o site oficial da linguagem para\n        o aprendizado. E depois de muita, mas muita luta para aprender, aquele\n        mesmo site era tudo o que se tinha para tentar convencer chefes e colegas\n        de que Clojure era uma boa chave de fenda para a sua caixa de ferramentas.\n        Na verdade mesmo depois de anos estudando, escrevendo e evangelizando\n        Clojure, eu mesmo enfrentava dificuldade de mostrar às pessoas o quão\n        valorosa ela é.\n        ")]),t("p",{staticClass:"text-justify"},[e._v("\n        Pois bem. Ao saber que Plínio, figura barbuda e conhecida na comunidade,\n        iria escrever sobre Clojure, muito me animei. Primeiro por que era um\n        livro brasileiro de Clojure, por si só isto é excepcional! Segundo por\n        que ele poderia facilmente repetir o sucesso de outras publicações suas.\n        E este cidadão me supera as expectativas com um conteúdo na quantidade,\n        profundidade e disposição que parece ter sido precisamente calculado para\n        capturar o seu e o meu cérebro com as mãos e colocá-los no mesmo patamar\n        de conhecimento a respeito da linguagem.\n        ")]),t("p",{staticClass:"text-justify"},[e._v("\n        Aqui está o "),t("i",[e._v("baseline")]),e._v(", o "),t("i",[e._v("must have")]),e._v(", o "),t("i",[e._v("mindset")]),e._v(" Clojure.\n        Uma espécie de atmosfera que agora você pode circular tranquilamente.\n        É como se tudo começasse agora, muito mais claro e fluido. Esse Plínio\n        fez, sem tornar a comparação Clojure vs. Java a sua bandeira, o que com\n        muita frequencia só se consegue erguendo-a bem lá no alto: Ensinar\n        Clojure e trazer todos para um mesmo ponto de partida. E alcançar a\n        linha de chegada só depende de mim e de você, quando teremos Clojure\n        sendo usada no dia-a-dia de muitos projetos, da concepção à entrega.\n        ")]),t("p",{staticClass:"text-justify"},[t("i",[t("b",[e._v("Paulo Suzart")]),e._v(", Engineering Manager na Omio Berlin e pioneiro do Clojure no Brasil")]),e._v(".\n        ")])])])])}],Fe={name:"Foreword",components:{LittleHeader:ce,LittleFooter:re}},Se=Fe,De=Object(c["a"])(Se,He,Be,!1,null,null,null),Re=De.exports;a["a"].config.productionTip=!1,a["a"].use(r["a"]),a["a"].use(n["a"]);var Ae=[{path:"/",component:W},{path:"/online",component:Oe},{path:"/dedication",component:Le},{path:"/foreword",component:Re},{path:"/:chapter",component:je}],Ie=new r["a"]({routes:Ae,scrollBehavior:function(e,o,t){return t||{x:0,y:0}}});new a["a"]({router:Ie,store:j,render:function(e){return e(m)},created:function(){}}).$mount("#app")},"64a9":function(e,o,t){}});