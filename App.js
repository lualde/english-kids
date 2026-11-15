
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView
} from 'react-native';

const lessons = [
  { title: 'ABC Alphabet', emoji: '🔤', color: '#FFE4A8' },
  { title: 'Numbers', emoji: '🔢', color: '#C8E8FF' },
  { title: 'Colors', emoji: '🎨', color: '#FFD4E5' },
  { title: 'Animals', emoji: '🐻', color: '#D9F5C5' },
  { title: 'Fruits', emoji: '🍎', color: '#FFE0C2' },
  { title: 'Shapes', emoji: '⭐', color: '#E5D9FF' },
];

export default function App() {
  const [selected, setSelected] = useState(null);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.logo}>🌈 ENGLISH KIDS</Text>
          <Text style={styles.subtitle}>Learn English Through Fun!</Text>
        </View>

        <View style={styles.welcome}>
          <Text style={styles.welcomeTitle}>Hello, Little Star! ⭐</Text>
          <Text style={styles.welcomeText}>
            Are you ready to learn and play?
          </Text>
          <Text style={styles.bigEmoji}>🧒🎈</Text>
        </View>

        <Text style={styles.heading}>Let's Start Learning!</Text>

        <View style={styles.grid}>
          {lessons.map((lesson, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.card, { backgroundColor: lesson.color }]}
              onPress={() => setSelected(lesson.title)}
            >
              <Text style={styles.emoji}>{lesson.emoji}</Text>
              <Text style={styles.cardTitle}>{lesson.title}</Text>
              <Text style={styles.play}>Let's Play! ▶</Text>
            </TouchableOpacity>
          ))}
        </View>

        {selected && (
          <View style={styles.lesson}>
            <Text style={styles.lessonTitle}>
              Great Choice! 🎉
            </Text>
            <Text style={styles.lessonText}>{selected}</Text>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setSelected(null)}
            >
              <Text style={styles.closeText}>Back to Lessons</Text>
            </TouchableOpacity>
          </View>
        )}

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            ⭐ Learn • Play • Grow ⭐
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF9ED',
  },
  header: {
    padding: 24,
    alignItems: 'center',
  },
  logo: {
    fontSize: 27,
    fontWeight: '900',
    color: '#6251C9',
  },
  subtitle: {
    fontSize: 15,
    color: '#777',
    marginTop: 8,
  },
  welcome: {
    backgroundColor: '#DCD5FF',
    margin: 18,
    padding: 22,
    borderRadius: 25,
    alignItems: 'center',
  },
  welcomeTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#45358E',
  },
  welcomeText: {
    fontSize: 15,
    marginTop: 10,
    color: '#45358E',
  },
  bigEmoji: {
    fontSize: 55,
    marginTop: 12,
  },
  heading: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#333',
    margin: 20,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
  card: {
    width: '43%',
    padding: 16,
    borderRadius: 22,
    marginBottom: 16,
    alignItems: 'center',
    minHeight: 145,
  },
  emoji: {
    fontSize: 42,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 8,
  },
  play: {
    fontSize: 12,
    color: '#555',
    marginTop: 8,
  },
  lesson: {
    margin: 20,
    padding: 20,
    backgroundColor: '#D5F4DA',
    borderRadius: 20,
    alignItems: 'center',
  },
  lessonTitle: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  lessonText: {
    fontSize: 20,
    margin: 12,
  },
  closeButton: {
    backgroundColor: '#6251C9',
    padding: 12,
    borderRadius: 12,
  },
  closeText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  footer: {
    padding: 25,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 17,
    color: '#6251C9',
    fontWeight: 'bold',
  },
});
