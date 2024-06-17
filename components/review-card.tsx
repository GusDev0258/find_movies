import { View, Text, StyleSheet } from "react-native";
import { Review } from "@/model/review";
import { Image } from "expo-image";
import {
  DEFAULT_PROFILE_PICTURE,
  DEFAULT_PROFILE_PICTURE_URL,
} from "@/constants/image-url";

export default function ReviewCard({ review }: { review: Review }) {
  const reviewDate = `${review.created_at.split("-")[1]}/${review.created_at.split("-")[0]}`;
  return (
    <View style={styles.review}>
      <View style={styles.reviewInfoContainer}>
        <View style={styles.reviewAuthorContainer}>
          <Image
            source={
              review.author_details?.avatar_path
                ? `${DEFAULT_PROFILE_PICTURE_URL}${review.author_details.avatar_path}`
                : `${DEFAULT_PROFILE_PICTURE}`
            }
            style={styles.avatarImage}
            contentFit="cover"
          />
          <View style={styles.reviewInfo}>
            <Text style={styles.authorName}>
              {review.author ? review.author : "anonymous"}
            </Text>
            <Text style={styles.reviewDate}>
              {reviewDate ? reviewDate : "no date"}
            </Text>
          </View>
        </View>
        <View style={styles.reviewDateContainer}>
          <Text style={styles.authorRating}>
            Nota:{" "}
            {review.author_details?.rating ? review.author_details.rating : "0"}{" "}
            / 10.0
          </Text>
        </View>
      </View>
      <Text style={styles.reviewContent}>{review.content}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  review: {
    padding: 12,
    borderBottomColor: "#e7e6e6",
    borderBottomWidth: 2,
    borderStyle: "solid",
  },
  avatarImage: {
    width: 50,
    height: 50,
    borderRadius: 40,
  },
  reviewInfoContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  reviewAuthorContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  reviewInfo: {},
  authorName: {},
  authorRating: {},
  reviewDateContainer: {},
  reviewDate: {},
  reviewContent: {},
});
