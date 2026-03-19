/** A selected option in a poll vote */
export interface SelectedPollOption {
  /** Local option ID */
  id: number;
  /** Option name */
  name: string;
}

/** A poll vote event */
export interface PollVote {
  /** The voter's WID */
  voter: string;
  /**
   * The selected options.
   * An empty array means the user deselected all options.
   */
  selectedOptions: SelectedPollOption[];
  /** Timestamp when the option was selected or deselected */
  interractedAtTs: number;
}
