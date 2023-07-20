export type ActionHandler = (action: ChangeAction | null) => void;

export type ChangeAction = {
  type: "update";
  path: string;
  value?: unknown;
  previousValue?: unknown;
  onUndo?: ActionHandler;
  onRedo?: ActionHandler;
};

export class RevisionManager {
  private history: ChangeAction[] = [];
  private redoStack: ChangeAction[] = [];

  update<T>(
    path: string,
    value: T,
    previousValue: T,
    onUndo: ActionHandler | undefined,
    onRedo: ActionHandler | undefined,
  ) {
    const action: ChangeAction = {
      type: "update",
      path,
      value,
      previousValue,
      onUndo,
      onRedo,
    };
    this.history.push(action);
    this.redoStack = [];
  }

  undo() {
    const action = this.history.pop();
    if (action) {
      this.redoStack.push(action);
      if (action.onUndo) action.onUndo(action);
      return action;
    }
    return null;
  }

  redo(): ChangeAction | null {
    const action = this.redoStack.pop();
    if (action) {
      this.history.push(action);
      if (action.onRedo) action.onRedo(action);
      return action;
    }
    return null;
  }

  _log() {
    console.log(this.history, this.redoStack);
  }
}
