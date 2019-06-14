# Enterprise Applications - Workspace



## Utilizzo di schematics

Per associare al progetto tf-schematics digitare:

`npm link ..\tf-schematics`

Pe creare una nuova componente applicativa digitare:

`ng generate tf-schematics:list-and-edit --project=[progetto] --entity=[nome]`

Per esempio:

`ng generate tf-schematics:list-and-edit --project=tfl-componentes --config=prodotto.yaml`

compilare la libreria `ng build --project=tfl-componentes --prod`

servire l'applicazione `ng s --project=tf-base --prod`

## NUOVI COMANDI

Compilazione di tutto il progetto in --prod
`npm run build`

Lanciare l'applicazone + watch/rebuild di tutto (libs e apps)
`npm start`

Servire solamente l'appliczione (dopo aver compilato)
`npm run serve`
