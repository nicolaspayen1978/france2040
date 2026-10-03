# Decision log

## 2026-10-03 — Model interrogates the Red Teams

Owner: EC-09 already lists what the model lacks (paths for growth, unemployment/income, rates,
propensity to spend, imports, property prices/volumes, defaults, fiscal variables, bank
refinancing, stop thresholds and delays). « Non tranché » is not « we know nothing. »

Method: every model number is one of observed data → sourced assumption → scenario assumption →
calculated result. Uncertain coefficients may enter as tagged scenario or sourced assumptions
without first becoming an EC verdict.

Four trajectories only: reference without Pacte; central Pacte; weak-transmission Pacte;
combined adverse Pacte. Aim: which variables dominate, where the mechanism breaks — not proof
of the central case. Dominance points back to a deeper EC cut if needed. No EC-10 until a new
object, not a new coefficient.

v0.1 is not patched. Next model is a new workbook and a new snapshot after Phase 1–2.

## 2026-10-03 — Phase 1 adjustments then families

Owner: Phase 1 go after five adjustments. (1) Tags O / S / Σ / ƒ so C is only Central.
(2) Four credit series: gross origination, cumulative, repayments, outstanding IO — 700 as
column-sum of net new is not automatically the 2040 stock. (3) R is a full tagged
counterfactual, not silent extrapolation. (4) A is one sentence: V2 adverse + Fuites-2 +
4-quarter stop delay; not a generic bad case. (5) Household cash released / amortisation
avoided and interest+principal outstanding are explicit outputs.

Semantic families first, then Σ numbers with a justification cell. Diversifié-1 (C),
Fuites-1 (W), Fuites-2 (A). Philosophy for the public model page: the model does not
resolve uncertainty; it makes uncertainty compete. Phase 2 is the tagged workbook.

## 2026-10-03 — Phase 2 first run

Owner GO after three corrections (bullets vintage+20; house-price index 70 by 2030; 2028
first-light clock). Workbook `Docs/20_Model_Phase2.xlsx`. Dominance: A’s ratio vs R is the
V2 macro, not Fuites-2; the stop clock dominates A’s IO stock (70 vs 700); C vs W is
allocation on volume/receipts with the same cash released; housing/Exist barely move because
originations stop early and EC-08 losses are unwired. No EC-10. v0.1 untouched.
