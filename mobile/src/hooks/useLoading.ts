import React from 'react'

export enum LoadingState {
  PRISTINE,
  LOADING,
  SUCCESS,
  ERROR,
}

export default function useLoading() {
  const [state, setState] = React.useState<LoadingState>(LoadingState.PRISTINE)

  return React.useMemo(
    () => ({
      state,
      start: () => setState(() => LoadingState.LOADING),
      success: () => setState(() => LoadingState.SUCCESS),
      error: () => setState(() => LoadingState.ERROR),
      reset: () => setState(() => LoadingState.PRISTINE),
    }),
    [state],
  )
}
