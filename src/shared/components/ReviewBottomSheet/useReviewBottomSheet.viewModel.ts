import { useEffect, useState } from "react";
import { useGetUserCommentQuery } from "../../queries/comments/user-get-use-comment.query";

interface RatingFormInterface {
  content: string;
  rating: number;
  isEdit: boolean;
}

const initialFormValue: RatingFormInterface = {
  content: "",
  rating: 0,
  isEdit: false,
};

export const useReviewBottomSheetViewModel = (productId: number) => {
  const [ratingForm, setRatingForm] =
    useState<RatingFormInterface>(initialFormValue);

  const { data: userComment, isLoading: loadingUserComment } =
    useGetUserCommentQuery(productId);

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

    //Verifica se o usuário já tem um comentário para o produto
  useEffect(() => {
    if (userComment && userComment.content && userComment.rating) {
      setRatingForm({
        content: userComment.content,
        rating: userComment.rating,
        isEdit: true,
      });
    } else {
        setRatingForm(initialFormValue);
    }
  }, [userComment]);

  return {
    handleRatingChange,
    handleContentChange,
    ratingForm,
  };
};
