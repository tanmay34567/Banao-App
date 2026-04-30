import { SignalDetail } from "./types";
import { data as personalised_reply_to_outreach_0 } from "./00-pre-contact/personalised-reply-to-outreach";
import { data as mentions_specific_contextproblem_0 } from "./00-pre-contact/mentions-specific-contextproblem";
import { data as quick_response_24h_0 } from "./00-pre-contact/quick-response-24h";
import { data as generic_reply_sounds_interesting_0 } from "./00-pre-contact/generic-reply-sounds-interesting";
import { data as asks_for_deck_immediately_0 } from "./00-pre-contact/asks-for-deck-immediately";
import { data as no_response_after_multiple_touchpoints_0 } from "./00-pre-contact/no-response-after-multiple-touchpoints";
import { data as redirects_to_generic_email_junior_0 } from "./00-pre-contact/redirects-to-generic-email-junior";
import { data as shows_up_on_time_1 } from "./01-contact/shows-up-on-time";
import { data as mentions_why_they_took_the_meeting_1 } from "./01-contact/mentions-why-they-took-the-meeting";
import { data as shares_context_without_prompting_1 } from "./01-contact/shares-context-without-prompting";
import { data as asks_what_do_you_do_only_1 } from "./01-contact/asks-what-do-you-do-only";
import { data as passive_low_energy_engagement_1 } from "./01-contact/passive-low-energy-engagement";
import { data as distracted_multitasking_no_camera_etc_1 } from "./01-contact/distracted-multitasking-no-camera-etc";
import { data as late_reschedules_multiple_times_1 } from "./01-contact/late-reschedules-multiple-times";
import { data as no_clear_reason_for_taking_meeting_1 } from "./01-contact/no-clear-reason-for-taking-meeting";
import { data as asks_relevant_follow_up_questions_2 } from "./02-interest/asks-relevant-follow-up-questions";
import { data as connects_to_internal_use_case_2 } from "./02-interest/connects-to-internal-use-case";
import { data as shares_internal_problems_voluntarily_2 } from "./02-interest/shares-internal-problems-voluntarily";
import { data as requests_next_meeting_2 } from "./02-interest/requests-next-meeting";
import { data as says_this_is_interesting_without_depth_2 } from "./02-interest/says-this-is-interesting-without-depth";
import { data as focuses_on_features_only_2 } from "./02-interest/focuses-on-features-only";
import { data as asks_for_deckrecording_2 } from "./02-interest/asks-for-deckrecording";
import { data as no_next_step_commitment_2 } from "./02-interest/no-next-step-commitment";
import { data as ghosts_after_initial_call_2 } from "./02-interest/ghosts-after-initial-call";
import { data as shares_detailed_workflowsprocess_3 } from "./03-discovery/shares-detailed-workflowsprocess";
import { data as admits_problemspain_clearly_3 } from "./03-discovery/admits-problemspain-clearly";
import { data as quantifies_impact_time_money_etc_3 } from "./03-discovery/quantifies-impact-time-money-etc";
import { data as introduces_internal_contextpolitics_3 } from "./03-discovery/introduces-internal-contextpolitics";
import { data as answers_but_stays_surface_level_3 } from "./03-discovery/answers-but-stays-surface-level";
import { data as deflects_deeper_questions_3 } from "./03-discovery/deflects-deeper-questions";
import { data as keeps_answers_generic_3 } from "./03-discovery/keeps-answers-generic";
import { data as avoids_discussing_impact_3 } from "./03-discovery/avoids-discussing-impact";
import { data as says_everything_is_fine_3 } from "./03-discovery/says-everything-is-fine";
import { data as asks_will_this_work_for_us_4 } from "./04-validation/asks-will-this-work-for-us";
import { data as shares_constraintsrequirements_4 } from "./04-validation/shares-constraintsrequirements";
import { data as engages_in_solution_discussion_4 } from "./04-validation/engages-in-solution-discussion";
import { data as compares_approaches_thoughtfully_4 } from "./04-validation/compares-approaches-thoughtfully";
import { data as asks_for_generic_demo_4 } from "./04-validation/asks-for-generic-demo";
import { data as focuses_only_on_features_4 } from "./04-validation/focuses-only-on-features";
import { data as no_clear_evaluation_criteria_4 } from "./04-validation/no-clear-evaluation-criteria";
import { data as repeats_basic_questions_4 } from "./04-validation/repeats-basic-questions";
import { data as brings_new_objections_late_4 } from "./04-validation/brings-new-objections-late";
import { data as mentions_internal_conversations_happening_5 } from "./05-internal-discussion/mentions-internal-conversations-happening";
import { data as shares_feedback_from_others_5 } from "./05-internal-discussion/shares-feedback-from-others";
import { data as asks_for_material_to_share_internally_5 } from "./05-internal-discussion/asks-for-material-to-share-internally";
import { data as prepares_for_internal_pitch_5 } from "./05-internal-discussion/prepares-for-internal-pitch";
import { data as says_will_discuss_internally_no_detail_5 } from "./05-internal-discussion/says-will-discuss-internally-no-detail";
import { data as delays_without_explanation_5 } from "./05-internal-discussion/delays-without-explanation";
import { data as no_visibility_into_stakeholders_5 } from "./05-internal-discussion/no-visibility-into-stakeholders";
import { data as goes_silent_after_internal_discussion_5 } from "./05-internal-discussion/goes-silent-after-internal-discussion";
import { data as comes_back_with_new_objections_misaligned_5 } from "./05-internal-discussion/comes-back-with-new-objections-misaligned";
import { data as introduces_new_stakeholders_proactively_6 } from "./06-stakeholder-expansion/introduces-new-stakeholders-proactively";
import { data as stakeholders_engage_with_context_6 } from "./06-stakeholder-expansion/stakeholders-engage-with-context";
import { data as persona_specific_questions_emerge_6 } from "./06-stakeholder-expansion/persona-specific-questions-emerge";
import { data as multiple_stakeholders_attend_calls_6 } from "./06-stakeholder-expansion/multiple-stakeholders-attend-calls";
import { data as stakeholders_passivesilent_6 } from "./06-stakeholder-expansion/stakeholders-passivesilent";
import { data as same_person_controls_all_communication_6 } from "./06-stakeholder-expansion/same-person-controls-all-communication";
import { data as will_loop_them_later_repeatedly_6 } from "./06-stakeholder-expansion/will-loop-them-later-repeatedly";
import { data as new_stakeholder_asks_from_scratch_6 } from "./06-stakeholder-expansion/new-stakeholder-asks-from-scratch";
import { data as conflicting_stakeholder_opinions_6 } from "./06-stakeholder-expansion/conflicting-stakeholder-opinions";
import { data as commits_resourcestime_for_pilot_7 } from "./07-pilot-test/commits-resourcestime-for-pilot";
import { data as defines_success_criteria_7 } from "./07-pilot-test/defines-success-criteria";
import { data as engages_actively_during_pilot_7 } from "./07-pilot-test/engages-actively-during-pilot";
import { data as shares_feedback_quickly_7 } from "./07-pilot-test/shares-feedback-quickly";
import { data as vague_pilot_goals_7 } from "./07-pilot-test/vague-pilot-goals";
import { data as low_engagement_during_pilot_7 } from "./07-pilot-test/low-engagement-during-pilot";
import { data as delays_pilot_start_repeatedly_7 } from "./07-pilot-test/delays-pilot-start-repeatedly";
import { data as no_clear_ownership_on_buyer_side_7 } from "./07-pilot-test/no-clear-ownership-on-buyer-side";
import { data as pilot_runs_but_no_decision_path_7 } from "./07-pilot-test/pilot-runs-but-no-decision-path";
import { data as asks_structured_pricing_questions_8 } from "./08-budget-discussion/asks-structured-pricing-questions";
import { data as discusses_budget_range_openly_8 } from "./08-budget-discussion/discusses-budget-range-openly";
import { data as aligns_cost_with_value_8 } from "./08-budget-discussion/aligns-cost-with-value";
import { data as mentions_budget_approval_process_8 } from "./08-budget-discussion/mentions-budget-approval-process";
import { data as asks_for_discount_early_8 } from "./08-budget-discussion/asks-for-discount-early";
import { data as price_sensitivity_without_context_8 } from "./08-budget-discussion/price-sensitivity-without-context";
import { data as too_expensive_without_reasoning_8 } from "./08-budget-discussion/too-expensive-without-reasoning";
import { data as budget_suddenly_becomes_blocker_8 } from "./08-budget-discussion/budget-suddenly-becomes-blocker";
import { data as no_clarity_on_budget_owner_8 } from "./08-budget-discussion/no-clarity-on-budget-owner";
import { data as shares_procurement_stepsprocess_9 } from "./09-procurement/shares-procurement-stepsprocess";
import { data as introduces_procurement_team_9 } from "./09-procurement/introduces-procurement-team";
import { data as engages_in_contract_discussion_9 } from "./09-procurement/engages-in-contract-discussion";
import { data as negotiates_specifics_9 } from "./09-procurement/negotiates-specifics";
import { data as delays_citing_process_vaguely_9 } from "./09-procurement/delays-citing-process-vaguely";
import { data as legalprocurement_slow_without_clarity_9 } from "./09-procurement/legalprocurement-slow-without-clarity";
import { data as reopens_solved_topics_9 } from "./09-procurement/reopens-solved-topics";
import { data as new_stakeholders_block_deal_9 } from "./09-procurement/new-stakeholders-block-deal";
import { data as endless_negotiation_loops_9 } from "./09-procurement/endless-negotiation-loops";
import { data as confirms_decision_clearly_10 } from "./10-close/confirms-decision-clearly";
import { data as aligns_on_next_stepstimeline_10 } from "./10-close/aligns-on-next-stepstimeline";
import { data as internal_champion_pushes_closure_10 } from "./10-close/internal-champion-pushes-closure";
import { data as verbal_commitment_given_10 } from "./10-close/verbal-commitment-given";
import { data as almost_there_without_specifics_10 } from "./10-close/almost-there-without-specifics";
import { data as delays_signing_without_reason_10 } from "./10-close/delays-signing-without-reason";
import { data as goes_silent_at_final_stage_10 } from "./10-close/goes-silent-at-final-stage";
import { data as last_minute_objections_10 } from "./10-close/last-minute-objections";
import { data as decision_pushed_indefinitely_10 } from "./10-close/decision-pushed-indefinitely";

export * from "./types";

export const signalDetailsData: Record<string, SignalDetail> = {
  "Personalised reply to outreach": personalised_reply_to_outreach_0,
  "Mentions specific context/problem": mentions_specific_contextproblem_0,
  "Quick response (<24h)": quick_response_24h_0,
  "Generic reply (“sounds interesting”)": generic_reply_sounds_interesting_0,
  "Asks for deck immediately": asks_for_deck_immediately_0,
  "No response after multiple touchpoints": no_response_after_multiple_touchpoints_0,
  "Redirects to generic email / junior": redirects_to_generic_email_junior_0,
  "Shows up on time": shows_up_on_time_1,
  "Mentions why they took the meeting": mentions_why_they_took_the_meeting_1,
  "Shares context without prompting": shares_context_without_prompting_1,
  "Asks “what do you do?” only": asks_what_do_you_do_only_1,
  "Passive / low energy engagement": passive_low_energy_engagement_1,
  "Distracted (multitasking, no camera, etc.)": distracted_multitasking_no_camera_etc_1,
  "Late / reschedules multiple times": late_reschedules_multiple_times_1,
  "No clear reason for taking meeting": no_clear_reason_for_taking_meeting_1,
  "Asks relevant follow-up questions": asks_relevant_follow_up_questions_2,
  "Connects to internal use case": connects_to_internal_use_case_2,
  "Shares internal problems voluntarily": shares_internal_problems_voluntarily_2,
  "Requests next meeting": requests_next_meeting_2,
  "Says “this is interesting” without depth": says_this_is_interesting_without_depth_2,
  "Focuses on features only": focuses_on_features_only_2,
  "Asks for deck/recording": asks_for_deckrecording_2,
  "No next step commitment": no_next_step_commitment_2,
  "Ghosts after initial call": ghosts_after_initial_call_2,
  "Shares detailed workflows/process": shares_detailed_workflowsprocess_3,
  "Admits problems/pain clearly": admits_problemspain_clearly_3,
  "Quantifies impact (time, money, etc.)": quantifies_impact_time_money_etc_3,
  "Introduces internal context/politics": introduces_internal_contextpolitics_3,
  "Answers but stays surface-level": answers_but_stays_surface_level_3,
  "Deflects deeper questions": deflects_deeper_questions_3,
  "Keeps answers generic": keeps_answers_generic_3,
  "Avoids discussing impact": avoids_discussing_impact_3,
  "Says “everything is fine”": says_everything_is_fine_3,
  "Asks “will this work for us?”": asks_will_this_work_for_us_4,
  "Shares constraints/requirements": shares_constraintsrequirements_4,
  "Engages in solution discussion": engages_in_solution_discussion_4,
  "Compares approaches thoughtfully": compares_approaches_thoughtfully_4,
  "Asks for generic demo": asks_for_generic_demo_4,
  "Focuses only on features": focuses_only_on_features_4,
  "No clear evaluation criteria": no_clear_evaluation_criteria_4,
  "Repeats basic questions": repeats_basic_questions_4,
  "Brings new objections late": brings_new_objections_late_4,
  "Mentions internal conversations happening": mentions_internal_conversations_happening_5,
  "Shares feedback from others": shares_feedback_from_others_5,
  "Asks for material to share internally": asks_for_material_to_share_internally_5,
  "Prepares for internal pitch": prepares_for_internal_pitch_5,
  "Says “will discuss internally” (no detail)": says_will_discuss_internally_no_detail_5,
  "Delays without explanation": delays_without_explanation_5,
  "No visibility into stakeholders": no_visibility_into_stakeholders_5,
  "Goes silent after “internal discussion”": goes_silent_after_internal_discussion_5,
  "Comes back with new objections misaligned": comes_back_with_new_objections_misaligned_5,
  "Introduces new stakeholders proactively": introduces_new_stakeholders_proactively_6,
  "Stakeholders engage with context": stakeholders_engage_with_context_6,
  "Persona-specific questions emerge": persona_specific_questions_emerge_6,
  "Multiple stakeholders attend calls": multiple_stakeholders_attend_calls_6,
  "Stakeholders passive/silent": stakeholders_passivesilent_6,
  "Same person controls all communication": same_person_controls_all_communication_6,
  "“Will loop them later” repeatedly": will_loop_them_later_repeatedly_6,
  "New stakeholder asks from scratch": new_stakeholder_asks_from_scratch_6,
  "Conflicting stakeholder opinions": conflicting_stakeholder_opinions_6,
  "Commits resources/time for pilot": commits_resourcestime_for_pilot_7,
  "Defines success criteria": defines_success_criteria_7,
  "Engages actively during pilot": engages_actively_during_pilot_7,
  "Shares feedback quickly": shares_feedback_quickly_7,
  "Vague pilot goals": vague_pilot_goals_7,
  "Low engagement during pilot": low_engagement_during_pilot_7,
  "Delays pilot start repeatedly": delays_pilot_start_repeatedly_7,
  "No clear ownership on buyer side": no_clear_ownership_on_buyer_side_7,
  "Pilot runs but no decision path": pilot_runs_but_no_decision_path_7,
  "Asks structured pricing questions": asks_structured_pricing_questions_8,
  "Discusses budget range openly": discusses_budget_range_openly_8,
  "Aligns cost with value": aligns_cost_with_value_8,
  "Mentions budget approval process": mentions_budget_approval_process_8,
  "Asks for discount early": asks_for_discount_early_8,
  "Price sensitivity without context": price_sensitivity_without_context_8,
  "“Too expensive” without reasoning": too_expensive_without_reasoning_8,
  "Budget suddenly becomes blocker": budget_suddenly_becomes_blocker_8,
  "No clarity on budget owner": no_clarity_on_budget_owner_8,
  "Shares procurement steps/process": shares_procurement_stepsprocess_9,
  "Introduces procurement team": introduces_procurement_team_9,
  "Engages in contract discussion": engages_in_contract_discussion_9,
  "Negotiates specifics": negotiates_specifics_9,
  "Delays citing process vaguely": delays_citing_process_vaguely_9,
  "Legal/procurement slow without clarity": legalprocurement_slow_without_clarity_9,
  "Reopens solved topics": reopens_solved_topics_9,
  "New stakeholders block deal": new_stakeholders_block_deal_9,
  "Endless negotiation loops": endless_negotiation_loops_9,
  "Confirms decision clearly": confirms_decision_clearly_10,
  "Aligns on next steps/timeline": aligns_on_next_stepstimeline_10,
  "Internal champion pushes closure": internal_champion_pushes_closure_10,
  "Verbal commitment given": verbal_commitment_given_10,
  "“Almost there” without specifics": almost_there_without_specifics_10,
  "Delays signing without reason": delays_signing_without_reason_10,
  "Goes silent at final stage": goes_silent_at_final_stage_10,
  "Last-minute objections": last_minute_objections_10,
  "Decision pushed indefinitely": decision_pushed_indefinitely_10,
};

export function getSignalDetail(
  title: string, 
  trackLabel: string, 
  index: number, 
  total: number, 
  status: string, 
  priority: string
): SignalDetail {
  if (signalDetailsData[title]) {
    return signalDetailsData[title];
  }

  // Fallback data structure for signals without specific content
  return {
    id: `fallback-${index}`,
    title: title,
    track: `SIGNAL . ${String(index).padStart(2, '0')} OF ${String(total).padStart(2, '0')}`,
    priority: `${priority} - Priority`,
    statusLabel: status === 'success' ? 'Strong Signal' : status === 'warning' ? 'Caution Signal' : 'Negative Signal',
    meaning: {
      description: `This signal indicates a moment of ${status === 'success' ? 'positive' : status === 'warning' ? 'uncertain' : 'negative'} engagement in the ${trackLabel} stage.`,
      subSignals: []
    },
    countsAsPersonalised: {
      real: { bullets: [], quotes: [] },
      fake: { bullets: [], quotes: [] }
    },
    whyPriority: {
      description: "Misinterpreting this signal can lead to a misalignment of expectations and wasted resources in the following stages.",
      strongRead: "maintain control of the deal flow.",
      misread: "lose momentum and drift into a 'no decision' state."
    },
    fresherMustUnderstand: {
      description: "",
      items: []
    },
    authorityMoves: {
      description: "",
      items: []
    },
    commonMistakes: {
      items: []
    },
    microSignals: {
      description: "",
      strong: [],
      medium: [],
      weak: []
    },
    whatHappensNext: {
      description: "",
      doText: "",
      dontItems: []
    },
    finalMentalModel: {
      title: "",
      description: ""
    },
    oneLineSummary: "",
    guardrails: { items: [] },
    bestPractices: { items: [] },
    aiMockTest: { description: "", steps: [] }
  };
}
