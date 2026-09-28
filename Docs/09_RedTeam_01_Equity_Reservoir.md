# Red team 01 — Is the mobilisable housing-equity stock large enough?

28 September 2026. Internal. This note attacks one assumption. It does not revise the Pacte.

Assumption under test: a cumulative net flow of about €500–700bn of new mortgage credit from 2027 to 2040 can be drawn from French residential equity at a consolidated loan-to-value of 40–50%, while also passing an interest-service test.

Status of this test:

- **Aggregate collateral objection: survived.** €700bn is no longer rejectable merely by pointing at the national housing stock.
- **Borrower-level capacity: unresolved.**
- **Regulatory compatibility: unresolved, and potentially binding.**
- **€700bn: an explicit scenario input, not an estimate.** The path is not revised.

Anyone who still wants to reject the number has to attack the borrower-level distribution, regulatory feasibility, or take-up. Those are kept as separate ceilings, not folded into one eligible stock.

## What is supported

End-2024 national balance sheet, Insee and Banque de France, *Insee Première* n° 2081, 6 November 2025, national accounts base 2020. Households include sole proprietors and non-profit institutions serving households.

| Item | € billion |
| --- | ---: |
| National net wealth | 19 559 |
| Household net wealth | 14 953 |
| Household non-financial assets | 9 967 |
| of which housing (`logements`) | 4 807 |
| of which built land (`terrains bâtis`) | 4 043 |
| Housing plus built land | 8 850 |
| Household financial assets | 7 096 |
| Household financial liabilities | 2 112 |
| of which credits | 1 768 |
| Household net financial wealth | 4 986 |
| General-government net wealth | 690 |
| General-government net financial wealth | −2 132 |
| General-government non-financial assets | 2 821 |

France is not short of wealth. Households hold 76.5% of national net wealth. The public sector’s net worth is 3.5% of the national total because its financial liabilities exceed its financial assets by €2 132bn. That is a statement about where leverage sits. It is not a statement that housing equity can be borrowed.

Housing credit to individuals was €1 289bn at end-July 2026, growing 0.2% over the year. New housing-loan production excluding renegotiations was €11.0bn in July 2026, at an average narrow effective rate of 3.30%, and 99.4% of that production was fixed-rate. Banque de France, *Crédits aux particuliers*, July 2026, published 4 September 2026. This stock is not the same object as the €1 768bn of household credits in the end-2024 national accounts: different date, and the accounts include consumer credit, sole proprietors and non-profits.

Début 2024, Insee *Première* n° 2090, 21 January 2026, *enquête Logement* 2023–2024, ordinary dwellings, France:

- 57.4% of households own their main residence, including usufructuaries.
- 37.4% own it with no remaining loan on that home.
- 20.0% still repay a loan on that home.
- 40.3% are tenants.

Among couples aged 65 or over, 81.9% are outright owners and 3.1% are still repaying. Among people aged 65 or over living alone, 62.5% are outright owners and 1.7% are still repaying. The unpledged main residence is concentrated at older ages. Among couples under 65 with one or two children, 46.9% are still repaying and 24.0% own outright.

Insee *Focus* n° 354, *enquête Histoire de vie et Patrimoine*, début 2024: 61.2% of households hold some real estate; 45.6% have a loan outstanding; the share with a housing loan peaks at 51.3% for reference persons aged 40–49 and is 6.1% at 70 or over.

Insee *Focus* n° 371: gross wealth is uneven. Households whose reference person is aged 50–79 are about half of households and hold 61% of the gross-wealth mass. Mean gross wealth is €374 900; the median is €205 100. These figures are total gross wealth, not housing equity.

The Haut Conseil de stabilité financière made two criteria binding from 1 January 2022 by decision D-HCSF-2021-7 of 29 September 2021, as amended in 2023. The borrower’s debt-service ratio must not exceed 35% of income. Maturity must not exceed 25 years. A deferral of principal repayment is allowed only when possession of the property is delayed, and even then total maturity is capped at 27 years and the amortisation period at 25 years. Banks may depart from the criteria for 20% of quarterly production, within further allocation limits. Official statement: [economie.gouv.fr, HCSF measure on mortgage origination](https://www.economie.gouv.fr/hcsf/mesures/mesure-relative-loctroi-de-credits-immobiliers). FAQ of the amended decision, question 24.

## An accounting residual, not a reservoir

If one subtracts the July 2026 individual housing-loan stock from 40% and from 50% of the end-2024 housing-plus-land stock, the residuals are:

- 40% × 8 850 − 1 289 = **€2 251bn**
- 50% × 8 850 − 1 289 = **€3 136bn**

€700bn is 31% of the first residual and 22% of the second. There is a large distance between the scenario and the national collateral ceiling. The aggregate evidence removes one potential kill: the housing stock, taken as a single collateral pool, is large enough. That arithmetic does not show the credit would be originated.

The residual ignores four cuts that all reduce it:

1. Date and perimeter. The collateral is end-2024 and includes sole proprietors and non-profits. The loan stock is July 2026 and is individuals’ housing credit only. Household credits in the accounts were €1 768bn at end-2024. Using €1 289bn understates encumbrance if other credit is secured on the same houses. Using €1 768bn overstates it if that other credit is unsecured.
2. Distribution. Headroom in an old outright owner’s house cannot be used by a tenant or by a mid-life household already near 40% loan-to-value. The free equity and the income to service a new loan are not in the same households: outright ownership is highest after 65, when the Insee housing-loan share has already collapsed.
3. The interest test. At 3.30%, before fees and insurance and with no other charges, a 35% debt-service cap supports interest-only principal of about 10.6 times annual income (0.35 / 0.033). Borrower insurance, taxed as part of the HCSF ratio, lowers that multiple. A 40% loan-to-value on an expensive house can fail this test even when the aggregate residual looks large. No published table crosses house value, existing mortgage and income, so the number of households for whom both constraints clear is unknown.
4. The maturity rule. V2 contemplates a very long interest-only loan without systematic repayment of principal. The binding HCSF standard requires amortisation within 25 years, except a short deferral tied to delayed possession, or a place inside the 20% flexibility margin. Whether a bullet interest-only loan fits that standard is unresolved. If it does not, the product as written is not originable at scale, whatever the equity stock.

## Reading

The collateral test is the part that came out stronger than expected. The demographic pattern is consistent with the mechanism in V2: outright ownership of the main home is 37.4% of households, against 20.0% still repaying, and it reaches 81.9% among couples aged 65 or over. A large stock of housing wealth sits with older households. That is not evidence they can, or will, borrow against it.

The problem moves down one level. The unknown that now matters is the joint distribution of property value, existing mortgage, household income, age, and willingness or eligibility to borrow. National accounts cannot produce it. A mortgage-free house worth €1m, owned by a pensioner on €30,000 of income, adds a great deal to the €2,251bn residual and may add little once a 35% debt-service test is applied. A mortgage-free house worth €500,000, owned by a household earning €100,000, can support substantial borrowing. Those two households are invisible in the aggregate.

The first genuinely dangerous issue is the HCSF framework, not the quantity of French property. Debt service is capped at 35% of income and maturity is generally capped at 25 years. At the July 2026 new-loan rate of 3.30%, a very long, primarily interest-only loan is not something the current rules can be assumed to allow. That is a legal and regulatory examination, still open.

Sentence this result supports, and that the public text should be able to carry:

> 700 Md€ ne représentent pas une estimation du crédit qui serait effectivement souscrit. Ils constituent un scénario de mobilisation à tester à l’intérieur d’une capacité patrimoniale nationale beaucoup plus importante, sous contraintes de revenu, de réglementation et d’adoption.

Next measurement, from households upward. Do not collapse the filters into one eligible amount. Report each ceiling on its own, at 30%, 40% and 50% loan-to-value:

1. **Collateral ceiling.** Housing value minus the mortgage already secured, up to each loan-to-value cap.
2. **Debt-service ceiling.** What income can carry, under more than one servicing rule, including the 35% HCSF cap at the observed rate plus insurance.
3. **Regulatory and product ceiling.** What remains if the loan must also fit the 25-year maturity rule, or sit inside the 20% flexibility margin. A very long interest-only loan is not assumed to pass.
4. **Take-up.** What households would actually draw. This is not a stock. It stays separate from the three ceilings.

The difference in policy is the point. The figures that follow are illustrations of two different findings, not results. A collateral ceiling of €1.4tn that current servicing rules cut to €450bn is not the same result as a household distribution that only supports €450bn before any rule is applied. If €700bn still clears 30% loan-to-value after the income constraint, the scenario is materially harder to dismiss. If it appears only at 50% and only under generous servicing, it is fragile. Until those four numbers exist, €700bn stays an input.

## Classification

1. **Supported.** The housing-plus-land stock is €8 850bn. Individual housing credit is €1 289bn. Outright owners of the main home are 37.4% of households, and they are disproportionately old. The HCSF 35% and 25-year rules are binding.
2. **Survived, at aggregate level only.** €700bn uses about 31% of the theoretical residual to a 40% consolidated loan-to-value. The national stock is not the binding constraint.
3. **Weak assumption.** Treating €8.85tn, or the €2,251bn residual, as credit that would be taken up. Treating gross-wealth means and medians as housing equity.
4. **Open, and kept separate.** Borrower-level capacity is unresolved. Regulatory compatibility is unresolved and potentially binding. Take-up is unresolved. Any one of them can kill the scenario without touching the national wealth total. None has been measured, and they must not be reported as a single eligible stock.
5. **Data required.** Microdata, or granular Insee bands, crossing housing value, outstanding secured debt, income, age and occupancy. Then the four filters above, each at 30%, 40% and 50% loan-to-value. The output is four numbers, not one. Until that table exists, €700bn stays an input.

## What this does not do

It does not estimate how much of any extracted equity would be spent, saved, or imported. It does not redraw the 2027–2040 credit path. It does not propose a different product.
