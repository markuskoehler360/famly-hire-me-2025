import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { checkinChild, checkoutChild, fetchChildren } from "../api";
import { ICheckinResponse } from "../interfaces/checkinResponse.interface";
import { IChild } from "../interfaces/child.interface";

export const useChildren = () => {
  return useQuery({
    queryKey: ["children"],
    queryFn: () => fetchChildren(),
  });
};

export const useCheckinChild = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (variables: { childId: string; pickupTime: string }) =>
      checkinChild(variables.childId, variables.pickupTime),
    onError: () => {
      alert("You chose an invalid pickup time. Please try again.");
    },
    onSuccess: (data: ICheckinResponse) => {
      queryClient.setQueryData(["children"], (oldData: IChild[]) => {
        return oldData.map((child) =>
          child.childId === data.childId
            ? {
                ...child,
                checkedIn: true,
                checkinTime: data.checkinTime,
              }
            : child
        );
      });
    },
  });
};

export const useCheckoutChild = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (variables: { childId: string }) =>
      checkoutChild(variables.childId),
    onSuccess: (data: IChild[]) => {
      queryClient.setQueryData(["children"], (oldData: IChild[]) => {
        return oldData.map((child) =>
          child.childId === data[0].childId
            ? {
                ...child,
                checkedIn: false,
              }
            : child
        );
      });
    },
  });
};
