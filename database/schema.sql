-- MVP PostgreSQL schema. The prerequisite adjacency table avoids a Neo4j dependency during the demo.
CREATE TABLE learning_concepts (
  id TEXT PRIMARY KEY,
  label TEXT NOT NULL,
  grade_level TEXT NOT NULL
);

CREATE TABLE concept_prerequisites (
  concept_id TEXT NOT NULL REFERENCES learning_concepts(id),
  prerequisite_id TEXT NOT NULL REFERENCES learning_concepts(id),
  PRIMARY KEY (concept_id, prerequisite_id)
);

CREATE TABLE learner_attempts (
  id BIGSERIAL PRIMARY KEY,
  student_id TEXT NOT NULL,
  question_id TEXT NOT NULL,
  is_correct BOOLEAN NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
