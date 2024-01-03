export interface GraphqlModelQuery<TVariables extends object | undefined = {}> {
    query: string;
    variables?: TVariables | null;
    cacheKey: string;
}

export interface GraphqlModelMutation<TVariables extends object | undefined = {}> {
    mutation: string;
    variables?: TVariables | null;
}