# Phase 2 — tagged run (not a public snapshot)

3 October 2026. Workbook: `Docs/20_Model_Phase2.xlsx`. Rebuild: `python3 scripts/modelPhase2.py` (needs `openpyxl`). Does not replace v0.1. Does not close any EC.

**The model does not resolve uncertainty. It makes uncertainty compete.**

Three Phase 1 corrections are in the run: bullets = vintage + 20 years (2027 → 2047); A house-price **index** 2027=100, 70 in 2030, then 70; first light **Σ** = calendar 2028 (first recession year), stop from 2029.

## What the four series do

Under Σ prepayment = 0, **C and W**: cumulative originations 2040 = outstanding 2040 = **700**. That equality is ƒ of the assumption, not an identity of the Pacte.

**A** (stop 2029): gross 2027–28 only = **70** outstanding. The EC-04 column is not A’s book.

## Dominance vs R (temporary EC-03/06 pass-throughs)

| vs R | FR volume 2027–40 Md€ | Pacte receipts 2027–40 | Δ debt/GDP 2040, pp | IO outstanding 2040 | cash released 2027–40 | HH IO interest 2040 |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| **C** Diversifié-1 | 125 | 65 | −3.2 | 700 | 223 | 23 |
| **W** Fuites-1 | 42 | 29 | −1.3 | 700 | 223 | 23 |
| **A** V2+Fuites-2+stop 2029 | 3 | 3 | **+45** | 70 | 30 | 3 |

Cash released is the same in C and W: it is the **product** (IO vs 20-year 3,30 % annuity), not the allocation. Allocation competes on volume and receipts: Diversifié-1 vs Fuites-1 cuts French volume by about two thirds.

A’s +45 pp ratio vs R is **not** the Pacte overlay. Ablations:

| Ablation vs A | What it removes | What actually moves |
| --- | --- | --- |
| A_no_recession | growth/unemployment gap | **−32 pp** on 2040 ratio (denominator). Volume unchanged. |
| A_no_rates | +200 bp | **−15 pp** on ratio; HH interest −0.9 |
| A_no_stop | the 2029 origination stop | outstanding **+630**; HH interest +33; volume +25; ratio only −1.2 pp |
| A_stop_now | keep 2028 vintage | outstanding −45; small |
| A_Fuites-1 | Exist 30 % wedge | volume +1.4; receipts +0.2 — **tiny in this pass-through** |
| A_no_housing | index follows R, not 70 | receipts +0.1 — **tiny** (A only originates while the index is still 100 then 90) |

## Where the next research dollar is (this run, not a verdict)

1. **A’s public-finance disaster vs R is the V2 macro (recession + sovereign refinancing), not Fuites-2.** If that remains true when pass-throughs change, deepen **EC-07** (and the R baseline) before another allocation vector.
2. **The stop clock dominates A’s household book.** 70 vs 700 is the delay convention, not EC-02. Next: whether 2028-as-first-light is admissible — still not a policy threshold.
3. **C vs W is an EC-02 fight** on volume/receipts, with the same 700 stock and the same cash released. Deepen EC-02 if the question is “does the Pacte produce French activity,” not “does IO raise cash.”
4. **EC-03/06 pass-throughs are still Σ.** They scale C vs W; they do not create A’s ratio gap. Do not close those ECs from this file.
5. **Housing/Exist barely compete** because A’s originations stop before the index has fallen far, and because EC-08 losses are not in the euro identities. A silent housing channel is a **missing object in the workbook**, not proof that EC-08 is small. Wire collateral/defaults before claiming housing lost the competition.
6. **No new object appeared** that would justify EC-10. The gaps are empty ports already named (EC-03/06 coefficients, EC-08 losses, R as official baseline).

C does **not** get an attractive headline from −3.2 pp on the ratio: that gap also sits on R’s 1,0 / 2,5 / 2,0 % Σ. Read C − R next to R’s own path on sheet `06_MacroFinance`.

## Files

- `scripts/modelPhase2.py` — source of the numbers
- `Docs/20_Model_Phase2.xlsx` — tagged sheets
- `Docs/19_Model_Interrogates_Red_Teams.md` — method
- Public `/documents/modele` v0.1 — unchanged
