import { useEffect, useState } from "react";
import { useGetUserCommentQuery } from "../../../../shared/queries/comments/user-get-use-comment.query";
import { useCreateCommentMutation } from "../../../../shared/queries/comments/use-create-comment.mutation";
import { useUpdateCommentMutation } from "../../../../shared/queries/comments/use-update-comment.mutation";
import { Toast } from "toastify-react-native";
import { useBottomSheetStore } from "../../../../shared/store/bottomSheet-store";

interface RatingFormInterface {
  content: string;
  rating: number;
  isEdit: boolean;
  commentId?: number;
}

const initialFormValue: RatingFormInterface = {
  content: "",
  rating: 0,
  isEdit: false,
  commentId: undefined,
};

export const useReviewBottomSheetViewModel = (productId: number) => {
  const [ratingForm, setRatingForm] =
    useState<RatingFormInterface>(initialFormValue);

  const { data: userComment, isLoading: loadingUserComment } =
    useGetUserCommentQuery(productId);

  const createCommentMutation = useCreateCommentMutation(productId)
  const updateCommentMutation = useUpdateCommentMutation(productId);

  const { close } = useBottomSheetStore();

  const handleRatingChange = (rating: number) => {
    setRatingForm((prevData) => ({
        ...prevData,
        rating
    }))
  }

  const handleContentChange = (content: string) => {
    setRatingForm((prevData) => ({
        ...prevData,
        content
    }))
  }

  const handleFormSubmit = async () => {
      if(ratingForm.rating === 0) {
        Toast.warn("Por favor, Selecione uma nota", "top" );
        return
      }

      if(ratingForm.content.trim() === "") {
        Toast.warn("Por favor, Escreva um comentário", "top" );
        return
      }

      const {isEdit, ...formData} = ratingForm;
      if(isEdit) {
        updateCommentMutation.mutate({
          ...formData,
          commentId: formData.commentId!,
        })
      } else {
        createCommentMutation.mutate({
          content: formData.content,
          rating: formData.rating,
          productId,
        })
      }
      close();
  }

  useEffect(() => {
    if (loadingUserComment) return;

    if (userComment?.comment) {
      setRatingForm({
        content: userComment.comment.content,
        rating: userComment.rating,
        isEdit: true,
        commentId: userComment.comment.id,
      });
    } else {
      setRatingForm(initialFormValue);
    }
  }, [userComment, loadingUserComment]);

  const isLoading =
    loadingUserComment ||
    createCommentMutation.isPending ||
    updateCommentMutation.isPending;

  return {
    handleRatingChange,
    handleContentChange,
    ratingForm,
    handleFormSubmit,
    isLoading,
  };
};
