Feature: Make sure the sample TypeScript Editor has some tests
  This is just a sample Gherkin feature file for the
  Rewrite Luigi HDFS targets to local sources.

  Scenario: RewriteLuigiHDFSTargets is added to your project by AddRewriteLuigiHDFSTargets
    Given the archive root
    When the RewriteLuigiHDFSTargets is run
    Then parameters were valid
    Then changes were made
    Then the hello file says hello
