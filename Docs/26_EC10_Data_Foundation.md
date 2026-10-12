# EC-10 data foundation: from housing equity to originatable credit

12 October 2026. Working file. Not an épreuve. No estimate of the €500–700bn path. The public question is announced and not yet written: EC-10, « Du patrimoine immobilier au crédit réellement distribuable ».

The question this file answers is whether a nationally weighted household-level origination model can be built from available French data, and what it would have to approximate.

## What the model has to see on the same household

For each owner-occupier, at the same date, with a weight that sums to the household population:

- current value of the main residence, and of other property if the advance could be secured on it;
- outstanding housing debt on that property, loan by loan if there are several;
- the contractual debt service on those loans;
- gross or disposable household income, and the income concept stated next to the 35% test;
- age of the adults, and whether the household is already retired;
- household composition, because income and the effort rate are household facts.

The originatable advance is the minimum of three rooms, computed on that household, then summed with the weights. Tranche room: a cap of 30, 40 or 50% of value. Consolidated room: a cap of 50, 60 or 70% of value, minus outstanding housing debt. Income room, under the rule being tested: the HCSF last-year reading; contractual interest; a 20-year notional annuity; a 30-year notional annuity. Rates 3, 4, 5 and 6% are scenarios, chosen before the result is seen. Where retirement falls inside the term, or within ten years, the income room is repeated on retirement income if the data contain it.

Published cross-tabulations cannot compute that minimum. A household that is rich in one margin and poor in another is invisible once the tables are separate. The model needs microdata.

## Recommended architecture

Use the French microdata of the Household Finance and Consumption Survey, which in France is the Insee survey Histoire de vie et patrimoine, conducted with the Banque de France.

Primary file, when the project can obtain it: Histoire de vie et patrimoine 2023-2024. Fieldwork June 2023 to January 2024, France excluding Mayotte, 11,940 responding households. Insee Résultats, « Patrimoine et endettement des ménages en 2024 », states that incomes are matched to fiscal and social data for 2022. The same interview describes the main residence, other property, and the debts attached to them. Household weights support a national sum. Public Insee tables from this wave can check margins. They are not the model.

Fallback, already documented as a researcher file: HFCS 2021, France. ECB methodological report for the 2021 wave: fieldwork September 2020 to March 2021; gross sample 16,338 households; 10,253 net; income taken from 2019 administrative data, gross of tax and net of social contributions; France did not use multiple imputation in that wave. The ECB variable list for the 2021 wave puts the required fields on one household record:

| Need | HFCS 2021 variable |
| --- | --- |
| Owner-occupier | HB0300, tenure of the main residence |
| Value | HB0900, current price of the main residence, as reported |
| Has a mortgage | HB1000 |
| Outstanding balance, loan by loan | HB170$x |
| Remaining maturity | HB171$x |
| Current interest rate | HB190$x |
| Monthly payment | HB200$x, plus HB2100 and HB2200 for further loans on the same home |
| Other property and its debt | HB2400 and following, including HB2900 and the loan loops |
| Income | DI2000, total gross income |
| Age | RA0300, on each person |
| Weight | the household weight delivered with the file |

Debt service for the existing loan should be the observed monthly payment, not an annuity imputed on the outstanding balance. The notional annuity is the test applied to the new advance. Mixing the two would double-count a modelling choice.

Access. The household file is not on data.gouv.fr. The open Insee files are aggregates. The HFCS microdata are released to researchers through the ECB and, for the French survey, through the usual researcher routes (Banque de France, Insee, and the secure-access centres). This project does not have that file. EC-10 cannot be computed from what is public today without either obtaining it or accepting that the result is not a household-level minimum.

## What would be approximate even with the file

- The reported price of the home is not an independent valuation. A conservative haircut is a scenario, and it must be labelled as one.
- HVP 2023-2024 incomes are 2022 fiscal incomes. HFCS 2021 incomes are 2019. Neither is 2026. Do not inflate them to the present inside the central case. A later income update is a sensitivity.
- Retirement income for a household that is still working is not the future pension. Age is observed. Current pension income is observed for households already retired. For workers within ten years of retirement, a future pension has to be imputed or the case has to be reported as missing. Do not fill it with current earnings and call it a retirement test.
- Insurance inside the French effort rate is not a separate HFCS field in the list read here. State that the 35% arithmetic excludes it until a premium is added as a sensitivity.
- Several loans on one home must be summed. A loan on another property is not debt on the home that secures the new advance, unless the scenario says the security covers both.
- HFCS 2021 France was not multiply imputed. Item non-response needs the provider’s missing-data note before a weighted total is treated as complete.
- Reweighting the 2021 file to the 2023-2024 published margins would not recreate the joint distribution. It is a check, not a substitute for the newer file.

## Formulas, once the file exists

On household i, value V, outstanding housing debt D, observed annual debt service S, income Y, rate r, term n years.

Tranche room = c × V, with c in {0.30, 0.40, 0.50}.

Consolidated room = max(0, k × V − D), with k in {0.50, 0.60, 0.70}.

Income room, insurance excluded:

- HCSF reading: the largest principal P such that P + rP, plus S if the old loan is still outstanding in the final year, is at most 0.35 × Y. If the remaining maturity of the old loan is unknown, report the result both with S in that year and without it.
- Contractual interest: (0.35 × Y − S) / r, when positive.
- Notional annuity: (0.35 × Y − S) / a(r, n), where a is the annual payment on one euro at monthly rate r/12 over 12n months. n is 20 and, as a separate case, 30.
- Ordinary amortising credit uses the same annuity formula as the contractual payment. At 20 years it equals the 20-year notional room.

Originatable advance = minimum of tranche room, consolidated room, and the income room of the rule being tested. The national stock is the weighted sum. Report the four stocks separately as well: collateral room, consolidated room, income room, and the minimum. Do not replace 700 Md€ with any of them until the scenarios have been frozen and the file has been used.

## Verdict of this foundation

A defensible household-level model can be built from HVP 2023-2024 microdata, with HFCS 2021 France as the documented fallback. It cannot be built from the published tables. The project does not yet have the microdata. No origination stock is estimated here.
