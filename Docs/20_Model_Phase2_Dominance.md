# Phase 2 — what does the Pacte change?

3 October 2026. Workbook: `Docs/20_Model_Phase2.xlsx`. Rebuild: `python3 scripts/modelPhase2.py`.

**Result numbers frozen 3 October 2026.** Qualities-of-use frame added the same day. Further quantification goes back into the model.

Scenario analysis, not a forecast. Not a public snapshot. Does not replace v0.1. Does not close any open critique.

**Story order:** What happens normally? → What if transmission disappoints? → What if France is hit by a crisis? → What does the Pacte change inside that crisis? → Why?

Workbook identifiers (not the language of the page): Central case (C) · Weak transmission (W) · Normal reference (R) · Adverse without Pacte (A₀) · Adverse with Pacte (A).

Working figure now published: `/en-images/cas-central-phase-2`. Draft SVG remains `Docs/20_cas_central.svg`.

## 1. Central case — what is expected to happen?

The Pacte mobilises €700bn of housing equity between 2027 and 2040. In the central scenario, households spend €315bn of it. The model estimates that this generates €125bn of additional French activity and €65bn of additional public receipts.

€700bn credit → €315bn additional spending → €125bn additional French activity → €65bn additional public receipts → −3.2 pp public debt/GDP in 2040 vs France without the Pacte.

Counterpart: €223bn household cash-flow released (vs an equivalent 20-year amortising loan in this scenario) and €700bn IO principal still outstanding in 2040.

The central hypothesis: the Pacte exchanges a larger private balance sheet for more household liquidity, economic activity and public receipts during the transition.

These numbers are not €700bn progressively shrinking into €65bn. They measure different things at different stages.

## What makes a use of Pacte funds valuable to France?

Do not choose sectors first. Define qualities, then test candidate uses.

A euro of Pacte-funded spending is more valuable to France when it combines: local employment (labour that can actually be supplied); local content; available capacity (real output, not mainly prices); capital creation (durable asset, not a sale of the existing stock); associated savings (lower future imports, bills, or public spending).

Immediate transmission (labour + content + capacity) is roughly what the €125bn measures. Capital and recurring effects are not in that number. Two expenditures generating the same French activity today can have very different long-term effects: one may end with the transaction, while another may also create capital and recurring savings. Insulation is an example, not a preferred use.

Savings can accrue to households, the import bill, government, or firms.

**Objective:** maximise the domestic economic value created per euro of private balance-sheet expansion — through current activity, capital formation and future savings — subject to capacity, inflation, household and financial-stability constraints.

Renovation, domestic energy production, certain infrastructure, productive SME investment and training can all be scored on the same list. Renovation is an interesting candidate, not a declared preferred use.

## Where can policy improve the result?

The product is the same in the central and weak-transmission cases: €700bn credit, €223bn household cash-flow, €700bn still outstanding. French activity is not: €125bn versus €42bn. Within this model, the first policy-sensitive lever is not how much households borrow, but the incentives affecting what happens after the credit is drawn. Government cannot assign household uses in a voluntary Pacte.

Phase 2.1 first slice (`Docs/21_Model_Phase2.1.xlsx`). Policy experiment: if incentives succeed in changing the use of funds, what is the consequence of the shift — not the behavioural response to the incentive.

| Use-of-funds shift (Σ) | Δ activity | Δ receipts | Δ debt/GDP vs C |
| --- | ---: | ---: | ---: |
| +10 pp toward renovation | +€28bn | +€10bn | −0.6 pp |
| +10 pp toward productive investment | +€21bn | +€8bn | −0.5 pp |
| −10 pp existing-asset rotation → renovation/investment | +€27bn | +€7bn | −0.5 pp |
| +10 pp transfers subsequently spent | +€14bn | +€7bn | −0.3 pp |

Same €700bn. Activity per €1 drawn: €0.18 in Central, €0.06 in weak transmission. Government policy can **influence** how much of that liquidity becomes productive French capacity. It does not determine it.

The run does not estimate what incentive would produce a 10 pp shift, its cost to the State, supply absorption, or leakage into prices/imports. Empty: policy instrument → behavioural response. Modelled: use-of-funds shift → volume → receipts. Policy cost empty.

Four candidate gates (not ranked): use of funds → French capacity → employment/capacity → fiscal capture → public balance sheet. The 2.1 table scores only immediate activity and receipts. Capital, recurring savings, instrument, behavioural response and policy cost remain empty.

## 2. What if households mostly don’t spend the money?

Keep the financial product the same; change only how the money is used.

| | Central use | Weak transmission |
| --- | ---: | ---: |
| Credit mobilised | €700bn | €700bn |
| Household cash-flow effect | €223bn | €223bn |
| Additional spending | €315bn | €105bn |
| French activity | €125bn | €42bn |
| Public receipts | €65bn | €29bn |
| Debt/GDP vs no Pacte | −3.2 pp | −1.3 pp |

The Pacte can successfully release household cash without successfully stimulating the French economy.

Why €125bn becomes €42bn: less renovation (−56), less consumption (−21), less productive investment (−6). More remains liquid, repays debt, buys existing assets, or is transferred.

## 3. What if France enters a severe adverse scenario?

First without the Pacte. Recession, higher unemployment, sovereign rates +200 bp, 30% housing decline: **+44.9 pp** debt/GDP in 2040 vs the normal reference. That is the adverse France effect.

Then the same world with the Pacte. Warning in 2028; new lending stops in 2029; **€70bn** originated.

| Same crisis | Debt/GDP vs normal reference |
| --- | ---: |
| Without the Pacte | +44.9 pp |
| Pacte effect inside that crisis | −0.2 pp |
| With the stopped Pacte | +44.8 pp |

Along the way: about €3bn French activity, €2.5bn receipts, €30bn household cash-flow, €70bn IO principal.

In this adverse run, the Pacte neither causes the fiscal crisis nor rescues France from it. The stop rule limits the book to €70bn; the net effect on the 2040 public-debt ratio is small.

## What drives these results?

Ablation effects, not an additive causal split: recession about 32.5 pp of the adverse gap vs the normal reference; higher sovereign rates about 15 pp.

Housing risk has not “lost” the test. The current model does not yet connect falling collateral values to defaults and bank losses.

Stop rule: origination continues → €700bn outstanding; stop in 2029 → €70bn outstanding. Removing the stop moves 2040 debt/GDP by about 1.2 pp in this adverse run.

## Assumptions (audit)

- €315bn = 45% × €700bn (central use mix). €105bn = 15% × €700bn (weak use mix).
- Activity and receipts use temporary conversion rates for this run.
- Cash-flow comparator: 20-year loan at 3.30%. Outstanding equals originations because prepayment = 0. First bullets 2047.
- Adverse house-price index: 100 in 2027, 70 from 2030.
- Tags in the workbook: O observed, S sourced, Σ scenario, ƒ calculated.

Provisional research order from this run: public-path assumptions and the adverse baseline → housing loss channel → how credit is used → activity and receipt conversion rates.

No new named scenario family after A₀. No EC-10.
