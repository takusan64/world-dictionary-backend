@import "./style.less"

<!---
To use the UML,  you need to
- Java(https://java.com/ja/)
- Graphviz(http://www.graphviz.org/download/)
- Vscode-Plantuml(https://github.com/qjebbs/vscode-plantuml)
- Markdown Preview Enhanced(https://shd101wyy.github.io/markdown-preview-enhanced/#/)
In order to use UML,  you need to install

HTML created with Markdown Preview Enhanced can be converted to JSX at this site.
(https://transform.tools/html-to-jsx)
-->

#### [**JA Lang Table**]
```plantuml
@startuml

' hide the spot
hide circle

' avoid problems with angled crows feet
skinparam linetype ortho

entity "countris_ja" as e01_ja {
  +id : **serial** [ PK ]
  --
  -country_group_id : **serial** [ FK ]
  code : **varchar(2)** [ NN, UK ]
  name : **varchar(64)** [ NN ]
  label : **varchar(64)** [ NN ]
  created_at : **timestamp** [ NN ]
  updated_at : **timestamp** [ NN ]
}

entity "country_details_ja" as e02_ja {
  +id : **serial** [ PK ]
  --
  -country_id : **serial** [ FK ]
  overview : **text** [ NN ]
  other : **text**
  created_at : **timestamp** [ NN ]
  updated_at : **timestamp** [ NN ]
}

entity "country_groups_ja" as e03_ja {
  +id : serial [ PK ]
  --
  label : **varchar(2)** [ NN, UK ]
  created_at : **timestamp** [ NN ]
  updated_at : **timestamp** [ NN ]
}

entity "term" as term {
  *PK : Primary Key
  --
  *FK : Forefin Key
  --
  *NN : Not Null
  --
  *UK : Unique Key
}

e01_ja ||..|| e02_ja
e01_ja }o..|| e03_ja
@enduml
```

#### [**EN Lang Table**]
```plantuml
@startuml

' hide the spot
hide circle

' avoid problems with angled crows feet
skinparam linetype ortho

entity "countris_en" as e01_en {
  +id : **serial** [ PK ]
  --
  -country_group_id : **serial** [ FK ]
  code : **varchar(2)** [ NN, UK ]
  name : **varchar(64)** [ NN ]
  label : **varchar(64)** [ NN ]
  created_at : **timestamp** [ NN ]
  updated_at : **timestamp** [ NN ]
}

entity "country_details_en" as e02_en {
  +id : **serial** [ PK ]
  --
  -country_id : **serial** [ FK ]
  overview : **text** [ NN ]
  other : **text**
  created_at : **timestamp** [ NN ]
  updated_at : **timestamp** [ NN ]
}

entity "country_groups_en" as e03_en {
  +id : serial [ PK ]
  --
  label : **varchar(2)** [ NN, UK ]
  created_at : **timestamp** [ NN ]
  updated_at : **timestamp** [ NN ]
}

entity "term" as term {
  *PK : Primary Key
  --
  *FK : Forefin Key
  --
  *NN : Not Null
  --
  *UK : Unique Key
}

e01_en ||..|| e02_en
e01_en }o..|| e03_en
@enduml
```