# Red team 02 — Transformation du crédit en dépense

28 septembre 2026. Note interne. Elle attaque une hypothèse. Elle ne révise pas le Pacte.

Hypothèse sous test : un euro de crédit nouveau garanti par le logement devient, à peu près, un euro de demande supplémentaire, puis de production française.

Verdict, après cette passe : **le test est passé au sens étroit du test 1.** Il ne tue pas l’hypothèse. Il isole un mécanisme de transmission non démontré. Trois quantités que v0.1 comprimait dans une seule hypothèse sont maintenant séparées : le crédit tiré, la dépense supplémentaire, la production française additionnelle. Les sondes 25 / 50 / 75 % ne répondent qu’à la question « si 700 Md€ sont empruntés, quelle dépense supplémentaire sous ce taux ? ». Elles ne disent rien sur le PIB français. Les deux cellules vides le restent. Les remplir maintenant créerait une fausse précision. Le produit 0,65 × 0,35 reste en place, étiqueté input non testé. Il n’est pas modifié, et il n’est pas une preuve.

## Ce que l’effet richesse ne tranche pas

Les travaux français sur la consommation mesurent surtout un effet richesse : le prix des logements monte, les ménages consomment-ils davantage ? Ce n’est pas le canal que le Pacte ouvrirait. Le Pacte rendrait empruntable un capital immobilier aujourd’hui illiquide. Un effet richesse faible en France est un avertissement. Il ne falsifie pas, à lui seul, un canal de liquidité qui n’a pas été observé à cette échelle.

Ce qui est établi, et qui reste un effet de prix plutôt qu’un retrait de liquidité :

- Sur données agrégées, un euro de patrimoine supplémentaire est associé à environ 0,8 à 1 centime de consommation annuelle. L’effet est plus fort pour le patrimoine financier que pour l’immobilier. Arrondel, Lamarche et Savignac, *Économie et Statistique* n° 472-473, 2014, qui citent Chauvin et Damette (2010) et Slacalek (2009).
- Sur l’enquête Patrimoine 2010, la propension marginale à consommer la richesse est d’environ 0,5 centime par euro. Pour la résidence principale, elle est de 1,1 centime sous la médiane de patrimoine net et de 0,7 centime dans le décile le plus riche. La propension baisse avec le niveau de patrimoine.

Ces chiffres ne sont pas un taux de transformation du crédit en dépense.

## L’usage du collatéral n’est pas la consommation

Quand des ménages européens ont utilisé leur résidence principale comme collatéral pour autre chose que l’acheter ou la rénover, l’argent est souvent allé vers un autre bien immobilier. Financer une activité professionnelle est aussi un usage important, en particulier en Italie, en France, en Grèce et en Espagne. Causa, Woloszko et Leite, OECD Economics Department Working Paper n° 1588, 16 décembre 2019, figure 16, calculs sur le HFCS. Le champ est étroit : il s’agit de la destination déclarée de prêts déjà gagés sur le logement, pas d’un programme de retrait d’équité. La figure ne donne pas, dans le texte, la part française exacte de chaque usage.

« Équité libérée » n’est donc pas « consommation produite ». Le ménage peut consommer, garder le cash, acheter un actif financier ou immobilier, financer une activité, ou remplacer un autre crédit.

## La distribution aggrave le problème

La propension à consommer le patrimoine baisse quand le patrimoine monte (Arrondel, Lamarche et Savignac, 2014). Or le réservoir est concentré là où cette propension est la plus faible. Début 2024, les ménages dont la personne de référence a entre 50 et 79 ans représentent 50 % des ménages et détiennent 61 % de la masse de patrimoine brut. Les 10 % les mieux dotés détiennent 48 % de cette masse. Insee, *Focus* n° 371, enquête Histoire de vie et Patrimoine 2023-2024, [insee.fr/fr/statistiques/8672665](https://www.insee.fr/fr/statistiques/8672665). C’est le patrimoine brut total, pas l’équité immobilière mobilisable.

## Conclusion

Même si plusieurs centaines de milliards d’euros de capacité d’emprunt supplémentaire existaient, ils ne peuvent pas être assimilés à plusieurs centaines de milliards de demande supplémentaire. Les ménages peuvent consommer les sommes empruntées, mais aussi les conserver sous forme liquide, acquérir des actifs financiers ou immobiliers, financer une activité professionnelle ou substituer ce crédit à d’autres financements.

L’expérience française n’offre pas aujourd’hui de coefficient observé permettant de transformer directement un euro de crédit garanti par le logement en un euro de consommation supplémentaire. Les travaux disponibles montrent au contraire que la réaction de la consommation au patrimoine immobilier est relativement faible en France et qu’elle diminue généralement avec le niveau de patrimoine. Cette dernière observation est particulièrement importante puisque le patrimoine immobilier mobilisable est fortement concentré parmi les ménages âgés et patrimoniaux.

Le scénario doit donc introduire explicitement un taux de transformation du crédit en dépense supplémentaire, puis distinguer la part de cette dépense adressée à la production française de celle consacrée aux importations. Tant que ces deux coefficients ne sont pas étayés, le passage de 700 Md€ de crédit à son effet sur le PIB reste une hypothèse et non un résultat.

## Conséquence pour le modèle

v0.1 multiplie encore le crédit par 0,65 (« domestic additional-spend share ») puis par 0,35 (« credit impulse »). Le produit, environ 0,23 euro de PIB réel par euro de crédit, est un input non estimé. Ce n’est pas le résultat de ce test, et ce n’est pas un cas central à conserver.

Aucun des taux 25 %, 50 % ou 75 % n’est une estimation. Sur 700 Md€, ils donnent 175, 350 et 525 Md€ de dépense supplémentaire. Ce sont des sondes, pas des prévisions. Ils ne doivent pas être multipliés par le 0,65 déjà présent : ce serait compter deux fois le même coefficient inconnu. La feuille `Conversion probes` laisse vides la part de cette dépense qui devient de la production française, et le taux de transmission minimum. La seconde cellule est vide pour une raison plus fondamentale : le Pacte n’a pas encore de critère de succès numérique. La trajectoire de dette nominale plate de v0.1 est une trajectoire imposée, pas un résultat. Le critère — contrefactuel sans Pacte, et ce que « tenir » veut dire — ne sera pas écrit maintenant. L’écrire trop tôt reviendrait à le dessiner autour de la réponse souhaitée. Il attend d’autres tests, à commencer par le test 3.

## Classement

1. **Établi.** L’effet richesse immobilier français mesuré est faible, et plus faible chez les ménages les plus patrimoniaux. Le patrimoine brut est concentré entre 50 et 79 ans et dans le décile supérieur. Dans les pays européens couverts par le HFCS, le collatéral du logement principal sert souvent un autre bien ou une activité professionnelle.
2. **Plausible, non démontré.** Une partie d’un crédit nouveau serait dépensée. La part est inconnue.
3. **Hypothèse faible.** Traiter 700 Md€ de crédit comme 700 Md€ de demande, ou lire 0,65 × 0,35 comme une estimation.
4. **Potentiellement fatal, non démontré.** La transmission du crédit vers la demande, puis vers la production française. Le seuil minimum n’est pas calculable tant que le critère de succès n’est pas un nombre, et ce nombre n’est pas à fixer avant le test 3.
5. **Données requises.** Usages des fonds pour un produit proche de celui du Pacte. Le contenu importé, les prix et la substitution sont le test 3, pas un coefficient à poser ici.
