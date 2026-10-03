# Phase 2.1 — use-of-funds shifts

3 October 2026. First slice run. `Docs/21_Model_Phase2.1.xlsx`. Rebuild: `python3 scripts/modelPhase21.py`.

Interpretation of the results page is frozen 3 October 2026. Further work returns to the model.

Not a forecast. Not a ranking. Not a public snapshot. Does not close any EC. Does not replace v0.1.

**€700bn is a constraint, not a target.** Credit, household cash-flow (€223bn) and outstanding IO (€700bn) are unchanged in every case below.

Policy experiment: what happens **if** incentives succeed in changing the use of funds? The model measures the consequence of the shift, not the behavioural response to the incentive. Government cannot assign household uses in a voluntary Pacte.

## Common denominator (ƒ, temporary pass-throughs)

| | French activity per €1 drawn | Public receipts per €1 drawn |
| --- | ---: | ---: |
| Central | €0.18 | €0.09 |
| Weak transmission | €0.06 | €0.04 |

Not established multipliers.

## If the use of funds shifts, what moves?

Hero intensities = 10 percentage points.

| Use-of-funds shift (Σ) | French activity | Receipts | Debt/GDP vs no Pacte |
| --- | ---: | ---: | ---: |
| Central case (levels) | €125bn | €65bn | −3.2 pp |
| +10 pp toward renovation | **+€28bn** | **+€10bn** | **−0.6 pp** |
| +10 pp toward productive investment | +€21bn | +€8bn | −0.5 pp |
| −10 pp existing-asset rotation → renovation/investment | +€27bn | +€7bn | −0.5 pp |
| +10 pp transfers subsequently spent | +€14bn | +€7bn | −0.3 pp |

Activity per €1 after the +10 pp renovation shift: €0.22.

## Σ constructions (from Diversifié-1)

- **+5/10/15 pp toward renovation:** taken equally from Liq and Exist, into Trav.
- **+5/10 pp toward productive investment:** taken equally from Liq and Exist, into Inv.
- **−5/10/15 pp existing-asset rotation:** Exist down; Trav and Inv up in the Diversifié-1 Trav:Inv ratio (28:5). Policy-hope landing, not “they hold cash instead.”
- **+10 pp transfers subsequently spent:** originator mix unchanged; Trf euros spent by the recipient on Diversifié-1 excluding nested transfers.

## + pp toward renovation (same construction)

| pp | Δ activity | Δ receipts | Δ debt/GDP vs C |
| ---: | ---: | ---: | ---: |
| 5 | +€14bn | +€5bn | −0.3 pp |
| 10 | +€28bn | +€10bn | −0.6 pp |
| 15 | +€42bn | +€15bn | −0.9 pp |

Linearity here is ƒ of constant pass-throughs, not a behavioural finding.

## What this does not yet tell government

A +10 pp shift toward renovation produces +€28bn of French activity in this model. The run does not estimate what incentive would produce that 10 pp shift, how much it would cost the State, whether supply could absorb it, or how much would instead appear in prices or imports.

Empty: policy instrument → behavioural response. Modelled: use-of-funds shift → domestic volume → receipts. Policy cost empty.

MaPrimeRénov’ and reduced VAT (10 % for certain improvement/maintenance; 5,5 % for qualifying energy renovation) are existing French machinery, not a calibration.

No new C/W/A family. No EC-10.

## What makes a use of funds valuable (next ports, not a longer results page)

Define qualities first, then test uses. Do not start from renovation.

| Quality | What it asks |
| --- | --- |
| Local employment | Share of French labour, and whether that labour can be supplied |
| Local content | Share of French intermediates, services, value added |
| Available capacity | Real output vs prices, wages, queues |
| Capital creation | New or improved durable asset vs transfer of an existing asset |
| Associated savings | Lower future imports, household/business costs, or public expenditure |

Phase 2.1 has scored only immediate volume/receipts of an allocation shift. Empty: capital stock, recurring savings by beneficiary (household / import bill / government / firm), policy cost, behavioural response.

**Objective:** maximise domestic economic value per euro of private balance-sheet expansion — current activity, capital formation, future savings — subject to capacity, inflation, household and financial-stability constraints.

